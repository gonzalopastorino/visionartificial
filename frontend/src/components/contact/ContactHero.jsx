const ContactHero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-24">
      <div className="-mt-24 -mx-6 bg-linear-to-b from-[#13284D] to-[#203A73] px-6 py-16 text-center md:-mx-12 md:px-12">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Hablemos de tu
          <span className="text-blue-500"> próximo proyecto</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Estamos listos para escuchar tus ideas y ayudarte a crear soluciones
          mediante tecnología, automatización e innovación.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;