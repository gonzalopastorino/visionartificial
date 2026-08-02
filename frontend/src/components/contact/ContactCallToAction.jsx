const CallToAction = () => {
  return (
    <section className="relative flex min-h-156.5 w-full items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/images/redes5.jpg"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/60" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col items-center px-5 text-center">
        <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl">
          ¿Listo para transformar?
          <br />
          tu empresa?
        </h2>

        <p className="mb-8 max-w-4xl text-base font-normal leading-relaxed text-white md:text-2xl">
          Agenda una consulta con nuestro equipo y descubre cómo podemos
          ayudarte a implementar soluciones inteligentes para tu negocio.
        </p>

        <a
          href="https://wa.me/573116298867"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-8
            py-4
            text-lg
            font-semibold
            text-gray-900
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:bg-gray-100
            hover:shadow-xl
            active:scale-95
          "
        >
          <span>Llamar ahora</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;