  import FlowingMenu from "../links/FlowingMenu";

  const projects = [
    {
      number: "01",
      title: "Inteligencia Artificial",
      category: "Soluciones de IA para automatizar procesos.",
      bullets: [
        "✓ Chatbots inteligentes para atención",
        "✓ Análisis predictivo de datos",
        "✓ Automatización de tareas repetitivas",
        "✓ Optimización de procesos",
        "✓ Análisis de sentimiento y datos",
      ],
      image: "/selection/aum1.jpg",
      alt: "Inteligencia Artificial",
    },
    {
      number: "02",
      title: "Desarrollo de Software",
      category: "Aplicaciones personalizadas para su negocio",
      bullets: [
        "✓ Aplicaciones web empresariales",
        "✓ Sistemas de gestión personalizados",
        "✓ Integración de sistemas",
        "✓ Aplicaciones móviles iOS/Android",
      ],
      image: "/selection/code2.jpg",
      alt: "Desarrollo de Software",
    },
    {
      number: "03",
      title: "Seguridad Informática",
      category: "Protección de datos y sistemas de información",
      bullets: [
        "✓ Evaluación de vulnerabilidades",
        "✓ Implementación de firewalls y VPN",
        "✓ Control de acceso y autenticación",
        "✓ Copias de seguridad encriptadas",
        "✓ Plan de respuesta ante incidentes",
      ],
      image: "/selection/silice.jpg",
      alt: "Seguridad Informática",
    },
    {
      number: "04",
      title: "Mesa de Ayuda",
      category: "Soporte técnico rápido y eficiente para su equipo",
      bullets: [
        "✓ Atención telefónica y por correo",
        "✓ Ticketing y seguimiento de incidentes",
        "✓ Soporte en sitio cuando es necesario",
        "✓ Base de conocimiento disponible",
        "✓ Escalamiento rápido de problemas críticos",
      ],
      image: "/selection/software2.jpg",
      alt: "Mesa de Ayuda",
    },
    {
      number: "05",
      title: "OutSourcing IT",
      category: "Gestión completa de su infraestructura tecnológica",
      bullets: [
        "✓ Gestión de servidores y bases de datos",
        "✓ Administración de redes",
        "✓ Actualizaciones y parches de seguridad",
        "✓ Monitoreo preventivo 24/7",
        "✓ Respaldo y recuperación de datos",
      ],
      image: "/selection/network1.jpg",
      alt: "OutSourcing IT",
    },
    {
      number: "06",
      title: "Admin de Servicios",
      category: "Monitoreo y mantenimiento de sistemas",
      bullets: [
        "✓ Monitoreo de rendimiento del sistema",
        "✓ Gestión de actualizaciones",
        "✓ Optimización de infraestructura",
        "✓ Asesoramiento técnico proactivo",
        "✓ Reportes mensuales",
      ],
      image: "/selection/software.jpg",
      alt: "Administración de Servicios",
    },
  ];

  const products = [
    {
      name: "AutoAgent",
      icon: "smart_toy",
      url: "https://autoagent.com.co/",
      image: "/productos/autoagent_logo.jpg",
    },
    {
      name: "Juridesk",
      icon: "balance",
      url: "https://juridesk.co/",
      image: "/productos/juridesk_logo.jpg",
    },
    {
      name: "NeoTalentIA",
      icon: "groups",
      url: "https://neotalentia.com/",
      image: "/productos/neotalentia_logo.jpg",
    },
    {
      name: "Sistema POS",
      icon: "point_of_sale",
      url: "https://posventa.co/",
      image: "/productos/posventa_logo.jpg",
    },
    {
      name: "Proveedores en línea",
      icon: "local_shipping",
      url: "https://proveedoresenlinea.com.co/",
      image: "https://placehold.co/600x400/13284D/ffffff?text=Proveedores",
    },
  ];

  const menuItems = products.map((product) => ({
    link: product.url,
    text: product.name,
    url: product.url,
    image: product.image,
  }));


  const ProjectRow = ({ project }) => {
    return (
      <article
        className="
          group
          relative
          overflow-hidden
          border-b
          border-gray-200
          py-12
          transition-all
          duration-300
        "
      >

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Título + bullets */}
          <div className="flex items-start gap-8 md:gap-20">

            <span className="mt-2 text-xs font-medium text-gray-400">
              {project.number}
            </span>


            <div>

              <h2
                className="
                  text-4xl
                  font-bold
                  uppercase
                  tracking-tight
                  text-[#13284D]
                  transition-transform
                  duration-500
                  group-hover:translate-x-3
                  md:text-7xl
                "
              >
                {project.title}
              </h2>


              <ul
                className="
                  mt-6
                  space-y-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                "
              >
                {project.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

            </div>

          </div>



          {/* Categoría + icono */}
          <div className="flex items-center gap-8">

            <p
              className="
                hidden
                max-w-xs
                text-right
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-500
                sm:block
              "
            >
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


        </div>



        {/* Imagen hover */}
        <div
          className="
            pointer-events-none
            absolute
            left-[55%]
            top-1/2
            z-0
            h-80
            w-64
            -translate-y-1/2
            scale-95
            overflow-hidden
            rounded-xl
            opacity-0
            shadow-2xl
            transition-all
            duration-500
            group-hover:scale-100
            group-hover:opacity-100
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
              group-hover:scale-110
              group-hover:grayscale-0
            "
          />

        </div>


      </article>
    );
  };



  export default function Galeria() {

    return (

      <div id="servicios">

        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            px-6
            pt-24
          "
        >

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
              Nuestros Servicios
            </h2>


            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              Soluciones tecnológicas diseñadas para impulsar el crecimiento de
              tu empresa.
            </p>


          </div>

        </section>



        {/* Encabezado */}
        <section
          className="
            mx-auto
            max-w-360
            px-6
            pt-16
            md:px-12
          "
        >

          <div
            className="
              mb-2
              flex
              items-end
              justify-between
              border-b
              border-gray-200
              pb-4
            "
          >

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#6b807d]
              "
            >
              Nuestros principales servicios ({projects.length})
            </h3>


            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-widest
                text-gray-400
                md:block
              "
            >
              Explorá y descubrí nuestros servicios destacados.
            </span>


          </div>

        </section>



        {/* Lista */}
        <section
          className="
            mx-auto
            max-w-360
            px-6
            pb-40
            md:px-12
          "
        >

          {projects.map((project) => (
            <ProjectRow
              key={project.number}
              project={project}
            />
          ))}

        </section>



        {/* Productos */}
        <section
          className="
            mx-auto
            max-w-360
            px-6
            pb-40
            md:px-12
          "
        >

          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              border-b
              border-gray-200
              pb-4
            "
          >
            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#6b807d]
              "
            >
              Nuestros Productos y Desarrollos Destacados
            </h3>
          </div>


          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu
              items={menuItems}
              speed={15}
              textColor="#ffffff"
              bgColor="#13284D"
              marqueeBgColor="#ffffff"
              marqueeTextColor="#13284D"
              borderColor="#4F46E5"
            />
          </div>
        </section>


      </div>

    );
  }