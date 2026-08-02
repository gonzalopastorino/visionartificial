import { Trophy, Award, MapPin, Settings, Clock, DollarSign } from "lucide-react";

const advantages = [
  {
    icon: <Trophy size={20} />,
    title: "10+ Años de Experiencia",
    text: "Nuestros profesionales tienen una década de trayectoria exitosa en desarrollos tecnológicos para empresas colombianas",
  },
  {
    icon: <Award size={20} />,
    title: "Equipo Certificado",
    text: "Profesionales con certificaciones internacionales en tecnología empresarial",
  },
  {
    icon: <MapPin size={20} />,
    title: "Soporte Local",
    text: "Atención personalizada y conocimiento profundo del mercado local",
  },
  {
    icon: <Settings size={20} />,
    title: "Soluciones Personalizadas",
    text: "Cada solución es diseñada según las necesidades específicas de tu empresa",
  },
  {
    icon: <Clock size={20} />,
    title: "Disponibilidad 24/7",
    text: "Soporte continuo cuando tu negocio lo necesita",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Precios Competitivos",
    text: "Acceso a soluciones premium sin comprometer tu presupuesto",
  },
];

const Eligenos = () => {
  return (
    <section className="bg-[#f7f9fc] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-300">
        <div className="mx-auto mb-16 max-w-180 text-center">
          <span className="mb-6 inline-block rounded-full bg-indigo-100 px-5 py-2.5 text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]">
            Nuestras Fortalezas
          </span>

          <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-tight text-[#13284D]">
            ¿Por qué elegir 
            <br />
            Grupo Automatic?
          </h2>

          <p className="text-[1.05rem] leading-8 text-[#69748C]">
            Ofrecemos ventajas que nos diferencian y nos convierten en el
            socio tecnológico ideal para tu empresa.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ icon, title, text }) => (
            <article
              key={title}
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
              <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#4F46E5] to-[#7C5CFF]" />

              <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-[#4F46E5] to-[#7C5CFF] text-xl text-white">
                {icon}
              </div>

              <h3 className="mb-3 text-[1.3rem] font-bold text-[#13284D]">
                {title}
              </h3>

              <p className="text-[0.97rem] leading-8 text-[#6E7892]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligenos;