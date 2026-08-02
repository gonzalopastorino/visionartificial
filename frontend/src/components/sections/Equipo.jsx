const teamMembers = [
  {
    avatar: "/images/dc2.jpg",
    name: "Carlos Jiménez Avendaño",
    position: "Director General",
    bio: "12 años de experiencia en tecnología empresarial",
  },
  // Descomentar para agregar más miembros:
  // {
  //   avatar: "👩‍💼",
  //   name: "Ana María Gutierrez",
  //   position: "Directora de Proyectos",
  //   bio: "Especialista en transformación digital",
  // },
  // {
  //   avatar: "👨‍💻",
  //   name: "Carlos Rodríguez",
  //   position: "Líder Técnico",
  //   bio: "Experto en infraestructura cloud y seguridad",
  // },
  // {
  //   avatar: "👩‍💻",
  //   name: "María López",
  //   position: "Especialista en Desarrollo",
  //   bio: "Desarrolladora de soluciones software personalizadas",
  // },
];

const Equipo = () => {
  return (
    <section className="bg-[#f7f9fc] px-6 py-24 md:px-12">
      <div className="mx-auto w-[min(1200px,90%)]">
        <div className="mx-auto mb-16 max-w-190 text-center">
          <span className="mb-6 inline-block rounded-full bg-indigo-100 px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]">
            Nuestro Talento
          </span>

          <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-tight text-[#13284D]">
            Equipo profesional
          </h2>

          <p className="text-[1.05rem] leading-8 text-[#69748C]">
            Nuestros especialistas dirigidos por un equipo directivo de excelencia, trabajan para ofrecer soluciones tecnológicas de vanguardia.
          </p>
        </div>

        <div className="grid-template-columns:repeat(auto-fit,minmax(250px,1fr))">
          {teamMembers.map(({ avatar, name, position, bio }) => (
            <article
              className="
                rounded-xl
                bg-white
                p-8
                text-center
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={avatar}
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#13284D]"
                />
              </div>

              <h3 className="mb-[0.3rem] text-[1.2rem] font-bold text-[#0a1929]">{name}</h3>

              <p className="mb-2 font-semibold text-[#1e3a8a]">
                {position}
              </p>

              <p className="text-[0.95rem] text-[#64748b]">{bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;