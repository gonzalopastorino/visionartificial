const Nosotros = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        pt-24
      "
    >

      {/* Encabezado */}
      <div
        className="
          -mx-6
          -mt-24
          bg-linear-to-b
          from-[#13284D]
          to-[#203A73]
          px-6
          py-16
          text-center
          md:-mx-12
          md:px-12
        "
      >
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Quienes somos
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            text-white/80
            md:text-lg
          "
        >
          Conoce la historia y valores de Grupo Automatic
        </p>
      </div>


      {/* Decoraciones */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-blue-100
          opacity-20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-blue-50
          blur-3xl
        "
      />


      {/* Contenido */}
      <div
        className="
          relative
          mx-auto
          max-w-5xl
          py-16
          text-center
        "
      >

        <h1
          className="
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            text-[#13284D]
            md:text-6xl
          "
        >
          Nuestra Historia
        </h1>


        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-gray-600
            md:text-xl
            max-w-[800px]
            text-left
          "
        >
          Grupo Automatic nace en 2025 con la visión de transformar la forma
          en que las pymes y pequeñas empresas acceden a soluciones
          tecnológicas. Durante este corto tiempo, hemos
          acompañado a empresas en Medellín y en toda Colombia en su
          transformación digital.
          
          <br />
          <br />

          Hemos comenzado como un pequeño equipo de especialistas IT y vamos en camino a ser 
          una empresa consolidada con experiencia
          en diversos sectores, desde retail hasta manufactura, servicios
          financieros y educación.
        </p>

      </div>

    </section>
  );
};

export default Nosotros;