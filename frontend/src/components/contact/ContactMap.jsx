const ContactMap = () => {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto max-w-300">
        {/* Encabezado */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#13284D] md:text-4xl">
            Nuestra ubicación
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Estamos listos para recibirte y conversar sobre nuevas
            oportunidades de innovación.
          </p>
        </div>

        {/* Mapa */}
        <div
          className="
            h-100
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            shadow-xl
            shadow-gray-200/50
          "
        >
          <iframe
            title="Ubicación"
            src="https://maps.google.com/maps?q=Bogota%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="
              h-full
              w-full
              grayscale
              transition-all
              duration-500
              hover:grayscale-0
            "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;