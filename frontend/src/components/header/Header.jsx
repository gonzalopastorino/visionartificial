import AnimatedPaths from "./AnimatedPaths";
import AnimatedTitle from "./AnimatedTitle";
import "../../css/hero.css";

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center">
      <AnimatedPaths />

      <div className="relative z-10 text-center container mx-auto px-4 flex flex-col items-center gap-6 pt-16">
        <AnimatedTitle />

        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl max-w-2xl">Expertos en desarrollos para empresas en toda Colombia.</p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/573116298867"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicita asesoría via WhatsApp →
          </a>
          <a
            href="/contacto"
            className="text-[#13284D] border border-black/20 hover:border-[#6a5acd] px-[34px] py-[18px] rounded-xl font-bold transition text-[16px] hover:-translate-y-1"
          >
            Contáctanos via Formulario →
          </a>
        </div>
      </div>
    </header>
  );
}