import { useRef } from "react";

const inputClasses =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-[#13284D] outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const inputs = form.querySelectorAll("input, textarea, select");

    let valid = true;

    inputs.forEach((field) => {
      field.setCustomValidity("");

      if (!field.value.trim()) {
        field.setCustomValidity("Por favor completa este campo.");
        valid = false;
      }
    });


    const email = form.querySelector('input[type="email"]');

    if (email.value && !email.value.includes("@")) {
      email.setCustomValidity("Por favor ingresa un email válido.");
      valid = false;
    }


    const service = form.querySelector("select");

    if (!service.value) {
      service.setCustomValidity("Por favor selecciona un servicio.");
      valid = false;
    }


    if (!valid) {
      form.reportValidity();
      return;
    }


    const formData = {
      nombre: form.querySelector('input[placeholder="Nombre"]').value,
      apellido: form.querySelector('input[placeholder="Apellido"]').value,
      email: form.querySelector('input[type="email"]').value,
      telefono: form.querySelector('input[type="tel"]').value,
      empresa: form.querySelector('input[placeholder="Empresa"]').value,
      servicio: form.querySelector("select").value,
      mensaje: form.querySelector("textarea").value,
    };


    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const result = await response.json();


      if (result.success) {
        alert("Mensaje enviado correctamente");
        form.reset();
      } else {
        alert(result.message);
      }


    } catch (error) {
      console.error("Error enviando formulario:", error);
      alert("No se pudo enviar el mensaje. Intenta nuevamente.");
    }
  };


  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
    >
      <h3 className="mb-6 text-2xl font-bold text-[#13284D]">
        Envíanos un mensaje
      </h3>


      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          placeholder="Nombre"
          className={inputClasses}
        />

        <input
          type="text"
          placeholder="Apellido"
          className={inputClasses}
        />
      </div>


      <input
        type="email"
        placeholder="Email"
        className={inputClasses}
      />


      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="tel"
          placeholder="Teléfono"
          className={inputClasses}
        />

        <input
          type="text"
          placeholder="Empresa"
          className={inputClasses}
        />
      </div>


      <select
        defaultValue=""
        className={inputClasses}
      >
        <option value="">Servicio de interés</option>
        <option value="Agentes de IA">Agentes de IA</option>
        <option value="Automatización">Automatización</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="Chatbots">Chatbots</option>
        <option value="Otro">Otro</option>
      </select>


      <textarea
        placeholder="Cuéntanos sobre tu proyecto..."
        className={`${inputClasses} h-36 resize-none`}
      />


      <button
        type="submit"
        className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-linear-to-r
          from-[#4F46E5]
          to-[#7C5CFF]
          px-6
          py-3
          text-base
          font-semibold
          text-white
          shadow-lg
          shadow-blue-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:brightness-110
          hover:shadow-xl
          active:scale-95
          md:self-start
        "
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;