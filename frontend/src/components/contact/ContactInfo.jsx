const contactItems = [
  {
    label: "Email",
    value: "info@visionartificial.co",
    icon: "✉",
  },
  {
    label: "Teléfono",
    value: "+57 300 123 4567",
    icon: "☎",
  },
  {
    label: "Ubicación",
    value: "Bogotá, Colombia",
    icon: "⌖",
  },
];

const ContactInfo = () => {
  return (
    <div className="relative">
      {/* Glow decorativo */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100 opacity-70 blur-3xl" />

      <div className="relative">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#13284D] md:text-5xl">
          Conectemos para
          <br />
          crear algo
          <span className="text-blue-600"> extraordinario</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
          Cuéntanos tu desafío. Nuestro equipo desarrolla soluciones digitales,
          automatización y software personalizado para empresas que buscan
          crecer.
        </p>

        {/* Información de contacto */}
        <div className="mt-10 space-y-4">
          {contactItems.map(({ label, value, icon }) => (
            <article
              key={label}
              className="
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-r
                  from-[#4F46E5]
                  to-[#7C5CFF]
                  text-xl
                  text-white
                "
              >
                {icon}
              </div>

              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-semibold text-[#13284D]">{value}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="mt-10">
          <p className="mb-4 text-sm text-gray-500">
            Síguenos en redes
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="https://www.instagram.com/grupoautomatic/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-red-900
                px-4
                py-2
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                md:px-5
                md:py-3
                md:text-sm
              "
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/grupoautomaticoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-blue-900
                px-4
                py-2
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                md:px-5
                md:py-3
                md:text-sm
              "
            >
              Facebook
            </a>

            <a
              href="https://wa.me/573116298867"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-green-500
                px-4
                py-2
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                md:px-5
                md:py-3
                md:text-sm
              "
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;