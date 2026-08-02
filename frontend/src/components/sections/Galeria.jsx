const projects = [
  {
    number: "01",
    title: "Inteligencia Artificial",
    category: "Soluciones AI para automatizar procesos",
    image: "/selection/aum1.jpg",
    alt: "Inteligencia Artificial",
  },
  {
    number: "02",
    title: "Desarrollo de Software",
    category: "Aplicaciones personalizadas para su negocio",
    image: "/selection/code2.jpg",
    alt: "Desarrollo de Software",
  },
  {
    number: "03",
    title: "Seguridad Informática",
    category: "Protección de datos y sistemas de información",
    image: "/selection/silice.jpg",
    alt: "Seguridad Informática",
  },
  {
    number: "04",
    title: "Mesa de Ayuda",
    category: "Soporte técnico rápido y eficiente para su equipo",
    image: "/selection/software2.jpg",
    alt: "Mesa de Ayuda",
  },
  {
    number: "05",
    title: "OutSourcing IT",
    category: "Gestión completa de su infraestructura tecnológica",
    image: "/selection/network1.jpg",
    alt: "OutSourcing IT",
  },
  {
    number: "06",
    title: "Admin de Servicios",
    category: "Monitoreo y mantenimiento de sistemas",
    image: "/selection/software.jpg",
    alt: "Administración de Servicios",
  },
];

const ProjectRow = ({ project }) => {
  return (
    <article
      className="
        group
        relative
        flex
        cursor-crosshair
        items-center
        justify-between
        overflow-hidden
        border-b
        border-gray-200
        py-12
      "
    >
      {/* Información */}
      <div className="relative z-10 flex items-center gap-8 md:gap-24">
        <span className="text-xs font-medium text-gray-400">
          {project.number}
        </span>

        <h2
          className="
            text-4xl
            font-bold
            uppercase
            tracking-tight
            text-[#13284D]
            transition-transform
            duration-500
            group-hover:translate-x-4
            md:text-7xl
          "
        >
          {project.title}
        </h2>
      </div>

      {/* Categoría */}
      <div className="relative z-10 flex items-center gap-8">
        <p className="hidden text-xs uppercase tracking-[0.25em] text-gray-500 sm:block">
          {project.category}
        </p>

        <span
          className="
            material-symbols-outlined
            text-3xl
            text-[#4F46E5]
            transition-transform
            duration-300
            group-hover:rotate-45
          "
        >
          north_east
        </span>
      </div>

      {/* Imagen flotante */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-80
          w-64
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-2xl
          opacity-0
          shadow-2xl
          transition-all
          duration-500
          group-hover:scale-100
          group-hover:opacity-100
          scale-95
        "
      >
        <img
          src={project.image}
          alt={project.alt}
          className="
            h-full
            w-full
            object-cover
            grayscale
            transition-all
            duration-700
            group-hover:grayscale-0
            group-hover:scale-105
          "
        />
      </div>
    </article>
  );
};

const Galeria = () => {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-360 px-6 pt-16 md:px-12">
        <div className="mb-2 flex items-end justify-between border-b border-gray-200 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b807d]">
            Nuestros principales servicios ({projects.length})
          </h3>

          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-gray-400 md:block">
            Explorá y descubrí nuestros servicios destacados.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-360 px-6 pb-40 md:px-12">
        {projects.map((project) => (
          <ProjectRow key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Galeria;