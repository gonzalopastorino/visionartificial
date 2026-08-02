const benefits = [
  {
    number: "01",
    title: "Reducción de costos",
    text: "Optimizamos tu infraestructura para disminuir gastos operativos sin afectar el rendimiento.",
    icon: "💰",
  },
  {
    number: "02",
    title: "Mayor seguridad",
    text: "Protegemos la información de tu empresa mediante soluciones modernas y monitoreo constante.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Soporte especializado",
    text: "Nuestro equipo responde rápidamente para mantener la continuidad de tu negocio.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Escalabilidad",
    text: "Implementamos tecnologías preparadas para acompañar el crecimiento de tu empresa.",
    icon: "📈",
  },
];

const BenefitsTailwind = () => {
  return (
    <section className="bg-[#f7f9fc] py-28 max-md:py-20">
      <div className="mx-auto w-[min(1200px,90%)]">
        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-190 text-center">
          <span className="mb-6 inline-block rounded-full bg-indigo-100 px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]">
            Lo que te ofrecemos
          </span>

          <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-tight text-[#13284D]">
            ¿Por qué elegir nuestras soluciones?
          </h2>

          <p className="text-[1.05rem] leading-8 text-[#69748C]">
            Ayudamos a empresas a optimizar sus procesos mediante
            infraestructura moderna, soporte continuo y tecnología orientada a
            resultados.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ number, title, text, icon }) => (
            <article
              key={number}
              className="
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-[#edf0f6]
                bg-white
                p-8
                shadow-[0_15px_35px_rgba(17,38,78,.06)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_30px_60px_rgba(17,38,78,.12)]
              "
            >
              {/* Barra superior */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#4F46E5] to-[#7C5CFF]" />

              <div className="mb-7 flex items-center justify-between">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-linear-to-br
                    from-[#4F46E5]
                    to-[#7C5CFF]
                    text-2xl
                    text-white
                    shadow-lg
                    shadow-indigo-300/40
                  "
                >
                  {icon}
                </div>

                <span className="select-none text-5xl font-extrabold text-indigo-200/60">
                  {number}
                </span>
              </div>

              <h3 className="mb-4 text-[1.35rem] font-bold text-[#13284D]">
                {title}
              </h3>

              <p className="text-[0.97rem] leading-8 text-[#6E7892]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsTailwind;