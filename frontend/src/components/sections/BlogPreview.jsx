const articles = [
  {
    image: "/images/aum3.jpg",
    date: "JUNIO 22, 7 PM",
    title: "Cómo la IA ayuda a las Pymes",
    description:
      "Descubre cómo la inteligencia artificial puede transformar tus procesos empresariales.",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/stats.jpg",
    date: "JUNIO 23, 8:30 AM",
    title: "Beneficios del Outsourcing IT",
    description:
      "Optimiza costos y eficiencia delegando tu infraestructura tecnológica.",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/empresa.jpg",
    date: "JUNIO 24, 8 PM",
    title: "Tecnología para pequeñas empresas",
    description:
      "Herramientas y soluciones accesibles para tu negocio en crecimiento.",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/code4.jpg",
    date: "JUNIO 25, 8 PM",
    title: "Cómo reducir costos con soporte administrado",
    description:
      "Las empresas con soporte administrado reportan hasta un 60% menos incidentes críticos y una reducción del 80% en los tiempos de resolución.",
    aspect: "aspect-square",
  },
];

const Blog = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-300">
        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block text-lg font-bold uppercase tracking-wider text-[#13284D]">
            Blog
          </span>

          <h2 className="text-lg leading-relaxed text-gray-500 md:text-xl">
            Compartimos algunos artículos para que conozcas más sobre los
            servicios que ofrecemos.
          </h2>
        </div>

        {/* Artículos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map(({ image, date, title, description, aspect }) => (
            <article
              key={title}
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className={`${aspect} overflow-hidden bg-gray-100`}>
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 text-xs font-bold tracking-wider text-[#4F46E5]">
                  {date}
                </span>

                <h3 className="mb-3 text-lg font-bold text-[#13284D]">
                  {title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;