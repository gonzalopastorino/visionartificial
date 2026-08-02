const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        pt-32
        pb-24
        md:px-12
        lg:pt-40
      "
    >
      {/* Blurs decorativos */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-indigo-200
          opacity-40
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          top-10
          h-112.5
          w-112.5
          rounded-full
          bg-blue-200
          opacity-40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-300">
        <div className="max-w-4xl">

          {/* Badge */}
          <span
            className="
              mb-8
              inline-flex
              rounded-full
              bg-indigo-100
              px-5
              py-2.5
              text-xs
              font-bold
              tracking-[2px]
              text-[#4F46E5]
            "
          >
            SOLUCIONES TECNOLÓGICAS PARA EMPRESAS
          </span>


          {/* Título */}
          <h1
            className="
              text-5xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-[#13284D]
              md:text-7xl
            "
          >
            Impulsamos la
            <span className="text-[#4F46E5]">
              {" "}
              transformación digital{" "}
            </span>
            de tu negocio
          </h1>


          {/* Descripción */}
          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-gray-600
              md:text-xl
            "
          >
            Ayudamos a empresas a optimizar su infraestructura,
            automatizar procesos y proteger su información mediante
            soluciones tecnológicas modernas y escalables.
          </p>


          {/* Botones */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >

            <button
              className="
                rounded-xl
                bg-linear-to-r
                from-[#4F46E5]
                to-[#7C5CFF]
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-indigo-300/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Solicitar asesoría
            </button>


            <button
              className="
                rounded-xl
                border-2
                border-[#4F46E5]
                px-8
                py-4
                font-semibold
                text-[#4F46E5]
                transition-all
                duration-300
                hover:bg-[#4F46E5]
                hover:text-white
              "
            >
              Nuestros servicios
            </button>

          </div>


          {/* Estadísticas */}
          <div
            className="
              mt-16
              grid
              grid-cols-3
              gap-6
              border-t
              border-gray-200
              pt-8
              max-w-xl
            "
          >

            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#13284D]
                  md:text-4xl
                "
              >
                +250
              </h3>

              <span className="text-sm text-gray-500">
                Clientes
              </span>
            </div>


            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#13284D]
                  md:text-4xl
                "
              >
                12+
              </h3>

              <span className="text-sm text-gray-500">
                Años
              </span>
            </div>


            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  text-[#13284D]
                  md:text-4xl
                "
              >
                99%
              </h3>

              <span className="text-sm text-gray-500">
                Satisfacción
              </span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;