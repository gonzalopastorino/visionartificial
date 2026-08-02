import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";
import rateLimit from "express-rate-limit";
import companyPrompt from "./prompts/companyPrompt.js";


dotenv.config();


const app = express();



app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tu-dominio.com",
    ],
  })
);


app.use(express.json());



// Rate limit chatbot

const chatLimiter = rateLimit({

  windowMs: 60 * 1000,

  max: 10,

  message: {
    reply: "Demasiados mensajes. Esperá unos segundos.",
  },

});



// Rate limit formulario

const contactLimiter = rateLimit({

  windowMs: 60 * 1000,

  max: 5,

  message: {
    success:false,
    message:"Demasiados intentos. Esperá unos segundos.",
  },

});



app.use("/chat", chatLimiter);




const anthropic = new Anthropic({

  apiKey: process.env.ANTHROPIC_API_KEY,

});





// Funciones de seguridad


const limpiarTexto = (valor = "") => {

  return valor
    .trim()
    .replace(/[<>]/g, "");

};



const emailValido = (email) => {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

};



const telefonoValido = (telefono) => {

  return /^[0-9+\-\s()]{7,20}$/.test(telefono);

};







// CHATBOT


app.post("/chat", async (req, res) => {

  try {


    const { message } = req.body;



    if (!message) {

      return res.json({

        reply:"Por favor escribí una consulta para poder ayudarte."

      });

    }



    const response = await anthropic.messages.create({


      model:"claude-sonnet-4-5",


      max_tokens:500,


      system: companyPrompt,


      messages:[

        {

          role:"user",

          content:message,

        },

      ],


    });



    const reply = response.content[0].text;



    console.log("RESPUESTA CLAUDE:");

    console.log(reply);



    res.json({

      reply,

    });



  } catch(error) {


    console.log("ERROR CLAUDE:");

    console.log(error);



    res.status(500).json({

      reply:"No pude procesar la consulta en este momento. Por favor intentá nuevamente."

    });


  }

});









// FORMULARIO CONTACTO


app.post("/api/contact", contactLimiter, async (req,res)=>{


  try {



    let {

      nombre,

      apellido,

      email,

      telefono,

      empresa,

      servicio,

      mensaje


    } = req.body;





    if(

      !nombre ||

      !apellido ||

      !email ||

      !telefono ||

      !empresa ||

      !servicio ||

      !mensaje

    ){


      return res.status(400).json({

        success:false,

        message:"Todos los campos son obligatorios."

      });


    }





    nombre = limpiarTexto(nombre);

    apellido = limpiarTexto(apellido);

    email = limpiarTexto(email);

    telefono = limpiarTexto(telefono);

    empresa = limpiarTexto(empresa);

    servicio = limpiarTexto(servicio);

    mensaje = limpiarTexto(mensaje);







    if(nombre.length < 3){


      return res.status(400).json({

        success:false,

        message:"Nombre inválido."

      });


    }






    if(!emailValido(email)){


      return res.status(400).json({

        success:false,

        message:"Email inválido."

      });


    }






    if(!telefonoValido(telefono)){


      return res.status(400).json({

        success:false,

        message:"Teléfono inválido."

      });


    }






    if(mensaje.length < 5){


      return res.status(400).json({

        success:false,

        message:"Mensaje demasiado corto."

      });


    }







    const cleanData = {


      nombre,

      apellido,

      email,

      telefono,

      empresa,

      servicio,

      mensaje


    };







    const response = await fetch(

      process.env.N8N_WEBHOOK_URL,

      {


        method:"POST",


        headers:{


          "Content-Type":"application/json"


        },


        body:JSON.stringify(cleanData)


      }


    );






    if(!response.ok){


      throw new Error("Error comunicando con n8n");


    }






    console.log("Formulario enviado a n8n:");

    console.log(cleanData);






    res.json({


      success:true,


      message:"Formulario enviado correctamente"


    });







  } catch(error){



    console.log("ERROR FORMULARIO:");

    console.log(error.message);




    res.status(500).json({


      success:false,


      message:"No se pudo enviar el formulario."


    });




  }



});







app.listen(5000,()=>{


  console.log("Servidor corriendo en puerto 5000");


});