const faq = [
  [
    "¿Cuánto demora implementar IA?",
    "Depende del proyecto. Las soluciones simples pueden estar listas en pocas semanas, mientras que proyectos más complejos requieren una planificación personalizada.",
  ],
  [
    "¿Necesito conocimientos técnicos?",
    "No. Nuestro equipo se encarga del análisis, desarrollo e implementación de la solución completa.",
  ],
  [
    "¿Ofrecen soporte luego del lanzamiento?",
    "Sí. Acompañamos a nuestros clientes con mantenimiento, mejoras y soporte continuo.",
  ],
  [
    "¿Trabajan con empresas pequeñas?",
    "Sí. Diseñamos soluciones escalables adaptadas a las necesidades y objetivos de cada empresa.",
  ],
];

const ContactFAQ = () => {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-300">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#13284D] md:text-5xl">
            Preguntas frecuentes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Resolvemos algunas de las dudas más comunes sobre nuestros servicios
            y procesos de implementación.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-2">
          {faq.map(([question, answer], index) => (
            <article
              key={index}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-xl
              "
            >
              <h3 className="mb-3 text-lg font-bold text-[#13284D]">
                {question}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;