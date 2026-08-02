import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallToAction from "../sections/CalltoAction";


const articles = [
  {
    image: "/images/aum3.jpg",
    date: "JUNIO 22, 7 PM",
    title: "Cómo la IA ayuda a las Pymes",
    intro:
      "La inteligencia artificial ha dejado de ser una tecnología futurista para convertirse en una herramienta práctica y accesible. Para las pequeñas y medianas empresas, la IA representa una oportunidad única de automatizar procesos, mejorar la experiencia del cliente y optimizar costos operacionales.",
    subtitle: "¿Cómo puede la IA beneficiar tu Pyme?",
    bullets: [
      "Automatización inteligente: Los chatbots de IA pueden manejar consultas básicas de clientes 24/7, liberando a tu equipo para tareas más estratégicas.",
      "Análisis de datos: La IA puede procesar grandes volúmenes de datos para identificar patrones, tendencias y oportunidades de negocio.",
      "Predicción y prevención: Modelos de machine learning pueden predecir problemas antes de ocurrir, permitiendo acciones preventivas.",
      "Eficiencia operacional: Desde la gestión de inventario hasta la optimización de rutas, la IA mejora la eficiencia en múltiples áreas.",
    ],
    subtitle2: "Casos de éxito",
    exito:
      "Empresas colombianas en retail, manufactura y  servicios ya están utilizando IA para transformar sus operaciones. Las que lo han implementado reportan reducciones de hasta 40% en costos operacionales y mejoras significativas en satisfacción del cliente.",
    cta: "Primeros pasos",
    call:
      "No necesitas ser una startup tech para beneficiarte de la IA. Comenzar es más simple que nunca: identifica un proceso que consuma mucho tiempo o recursos y explora cómo la IA puede automatizarlo. En Grupo Automatic podemos ayudarte a identificar las oportunidades de IA más prometedoras para tu negocio.",
    ctatext: "Solicita asesoría",
    aspect: "aspect-[4/3]",
  },

  {
    image: "/images/stats.jpg",
    date: "JUNIO 23, 8:30 AM",
    title: "Beneficios del Outsourcing IT",
    intro:
      "Muchas empresas pequeñas y medianas luchan con la complejidad de mantener una infraestructura IT robusta mientras contratan y retienen personal técnico especializado. El outsourcing IT emerge como una solución estratégica que ofrece múltiples beneficios.",
    subtitle: "Ventajas del Outsourcing IT",
    bullets: [
      "Reducción de costos: Elimina la necesidad de salarios altos de especialistas IT a tiempo completo. Pagas solo por lo que necesitas.",
      "Acceso a expertos: Obtienes un equipo de profesionales certificados sin los costos de reclutamiento y capacitación.",
      "Enfoque en el negocio: Tu equipo interno puede concentrarse en iniciativas que generan valor directo al negocio.",
      "Escalabilidad: Amplía o reduce servicios fácilmente según tus necesidades.",
      "Seguridad mejorada: Acceso a estándares de seguridad y cumplimiento normativo.",
    ],
    subtitle2: "¿Cuánto puedes ahorrar?",
    exito:
      "Las empresas que implementan outsourcing IT reportan ahorros de entre un 30% y un 50% en sus costos tecnológicos, además de convertir inversiones en infraestructura en gastos operativos predecibles.",
    ctatext: "Pídenos presupuesto",
    aspect: "aspect-[4/3]",
  },

  {
    image: "/images/empresa.jpg",
    date: "JUNIO 24, 8 PM",
    title: "Tecnología para pequeñas empresas",
    intro:
      "En un mundo donde la transformación digital es prácticamente obligatoria, muchas pequeñas empresas se sienten abrumadas por la cantidad de opciones tecnológicas disponibles. ¿Por dónde empezar? ¿Cuáles herramientas realmente necesitas?",
    subtitle: "Tecnologías clave para crecer",
    bullets: [
      "Cloud Computing: Escalabilidad sin inversión en servidores.",
      "CRM: Mejora la gestión de clientes y aumenta las ventas.",
      "Automatización de marketing para personalizar comunicaciones.",
      "Análisis de datos para tomar mejores decisiones.",
      "Seguridad en la nube para proteger la información.",
    ],
    subtitle2: "Estrategia de adopción",
    exito:
      "La clave no es adoptar todas las tecnologías al mismo tiempo. Comienza con la que mayor impacto tenga sobre tu negocio y evoluciona progresivamente.",
    ctatext: "Agenda una consulta",
    aspect: "aspect-[4/3]",
  },

  {
    image: "/images/code4.jpg",
    date: "JUNIO 25, 8 PM",
    title: "Cómo reducir costos con soporte administrado",
    intro:
      "El soporte IT tradicional es reactivo. El soporte administrado cambia completamente ese enfoque mediante monitoreo constante y prevención de incidentes.",
    subtitle: "Ventajas del soporte administrado",
    bullets: [
      "Prevención antes que reacción.",
      "Costos mensuales predecibles.",
      "Menos tiempo de inactividad.",
      "Monitoreo 24/7.",
      "Reportes completos sobre la infraestructura.",
    ],
    subtitle2: "ROI comprobado",
    exito:
      "Las empresas con soporte administrado reportan hasta un 60% menos incidentes críticos y reducciones significativas en sus costos totales de IT.",
    ctatext: "Compruébalo",
    aspect: "aspect-[4/3]",
  },
];

export default function Blog() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24">
        <div className="-mx-6 -mt-24 bg-linear-to-b from-[#13284D] to-[#203A73] px-6 py-16 text-center md:-mx-12 md:px-12">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Blog
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Compartimos algunos artículos para que conozcas más sobre nuestros
            servicios.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-300">
          <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <motion.article
                layout
                transition={{ duration: 0.35 }}
                key={article.title}
                className="
                  flex
                  flex-col
                  self-start
                  overflow-hidden
                  rounded-2xl
                  border
                border-gray-200
                bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Imagen */}
                <div className={`${article.aspect} overflow-hidden bg-gray-100`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 text-xs font-bold tracking-wider text-[#4F46E5]">
                    {article.date}
                  </span>

                  <h2
                    className="
                      mb-3
                      h-20
                      text-xl
                      font-bold
                      leading-tight
                    text-[#13284D]
                    "
                  >
                    {article.title}
                  </h2>

                  {/* Siempre visible */}
                  <p
                    className="
                      h-40
                      overflow-hidden
                      text-sm
                      leading-7
                    text-gray-600
                    "
                  >
                    {article.intro}
                  </p>

                  <button
                    onClick={() => toggleCard(index)}
                    className="
                      mt-4
                      mb-4
                      h-6
                      w-fit
                      text-sm
                      font-semibold
                      text-[#4F46E5]
                      hover:text-[#312E81]
                      transition
                    "
                  >
                    {expandedCard === index
                      ? "Leer menos ▲"
                      : "Leer más ▼"}
                  </button>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto"
                        }}
                        exit={{
                          opacity: 0,
                          height: 0
                        }}
                        transition={{
                          duration: 0.35
                        }}
                        className="overflow-hidden"
                      >
                        <h3 className="mb-3 mt-2 text-lg font-semibold text-[#13284D]">
                          {article.subtitle}
                        </h3>

                        <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                          {article.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>

                        <h3 className="mb-3 text-lg font-semibold text-[#13284D]">
                          {article.subtitle2}
                        </h3>

                        <p className="mb-6 text-sm leading-7 text-gray-600">
                          {article.exito}
                        </p>

                        {article.cta && article.call && (
                          <>
                            <h3 className="mb-3 text-lg font-semibold text-[#13284D]">
                              {article.cta}
                            </h3>

                            <p className="mb-6 text-sm leading-7 text-gray-600">
                              {article.call}
                            </p>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <a
                    href="/contacto"
                    className="
                      mt-4
                      inline-flex
                      w-fit
                      items-center
                      justify-center
                      rounded-lg
                      border-2
                      border-[#4F46E5]
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#4F46E5]
                      transition-all
                      duration-300
                      hover:bg-[#4F46E5]
                      hover:text-white
                    "
                  >
                    {article.ctatext}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}