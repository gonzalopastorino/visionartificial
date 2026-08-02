const cards = [
  {
    title: "Misión",
    content:
      "Proporcionar soluciones tecnológicas innovadoras y accesibles que permitan a Pymes optimizar sus procesos, reducir costos y crecer de manera sostenible en un entorno digital.",
  },
  {
    title: "Visión",
    content:
      "Crecer para ser el socio tecnológico preferido de pequeñas empresas en Colombia, reconocidos por nuestra calidad, profesionalismo y compromiso con el éxito de nuestros clientes.",
  },
];

const valores = [
  "Compromiso con el cliente",
  "Innovación continua",
  "Integridad y confianza",
  "Trabajo en equipo",
];

const MisionVisionValores = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-300">
        <div className="mx-auto mb-16 max-w-180 text-center">
          <span className="mb-6 inline-block rounded-full bg-indigo-100 px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]">
            Nuestros Pilares
          </span>

          <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-tight text-[#13284D]">
            Misión, Visión y Valores
          </h2>

          <p className="text-[1.05rem] leading-8 text-[#69748C]">
            Los principios que guían nuestro trabajo y nos impulsan a ofrecer
            soluciones de excelencia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map(({ title, content }) => (
            <article
              key={title}
              className="
                rounded-2xl
                border-l-4
                border-[#4F46E5]
                bg-linear-to-br from-[#f8f9ff] to-[#f0f1ff]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h3 className="mb-4 text-2xl font-bold text-[#4F46E5]">
                {title}
              </h3>

              <p className="leading-relaxed text-gray-600">{content}</p>
            </article>
          ))}

          <article
            className="
              rounded-2xl
              border-l-4
              border-[#4F46E5]
              bg-linear-to-br from-[#f8f9ff] to-[#f0f1ff]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <h3 className="mb-4 text-2xl font-bold text-[#4F46E5]">Valores</h3>

            <ul className="space-y-3">
              {valores.map((valor) => (
                <li key={valor} className="flex items-center gap-3 text-gray-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-xs text-white">
                    ✓
                  </span>
                  {valor}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionValores;