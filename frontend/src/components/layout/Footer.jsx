export default function FooterTailwind() {
  return (
    <footer className="text-[#333] pt-[70px] pb-0 bg-[#F8FAFD]">
      <div className="grid grid-cols-4 gap-[60px] px-[8%] pb-[70px] max-[992px]:grid-cols-2 max-[992px]:gap-[40px] max-[768px]:grid-cols-1">

        {/* Grupo */}
        <div>
          <h3 className="text-[#13284D] text-[22px] font-bold mb-[30px]">Grupo Automatic</h3>
          <p className="text-[#555] text-[16px] leading-[1.8]">Soluciones tecnológicas para impulsar tu empresa</p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-[#13284D] text-[22px] font-bold mb-[30px]">Enlaces Rápidos</h3>

          <ul className="list-none p-0 m-0">
            <li className="mb-[16px] cursor-pointer"><a href="#" className="no-underline text-[#444] text-[16px] font-normal transition-[.3s] hover:text-[#1C3680]">Inicio</a></li>
            <li className="mb-[16px] cursor-pointer"><a href="/nosotros" className="no-underline text-[#444] text-[16px] font-normal transition-[.3s] hover:text-[#1C3680]">Quiénes Somos</a></li>
            <li className="mb-[16px] cursor-pointer"><a href="/servicios" className="no-underline text-[#444] text-[16px] font-normal transition-[.3s] hover:text-[#1C3680]">Servicios</a></li>
            <li className="mb-[16px] cursor-pointer"><a href="/blog" className="no-underline text-[#444] text-[16px] font-normal transition-[.3s] hover:text-[#1C3680]">Blog</a></li>
            <li className="mb-[16px] cursor-pointer"><a href="/contacto" className="no-underline text-[#444] text-[16px] font-normal transition-[.3s] hover:text-[#1C3680]">Contáctanos</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-[#13284D] text-[22px] font-bold mb-[30px]">Contacto</h3>

          <div className="flex items-center gap-[14px] mb-[18px] text-[#444] text-[16px] font-normal leading-[1.8]">
            <span className="w-[22px] text-center">📍</span>
            <span>Medellín, Colombia</span>
          </div>

          <div className="flex items-center gap-[14px] mb-[18px] text-[#444] text-[16px] font-normal leading-[1.8]">
            <span className="w-[22px] text-center">✉️</span>
            <span>hola@grupoautomatic.com</span>
          </div>

          <div className="flex items-center gap-[14px] mb-[18px] text-[#444] text-[16px] font-normal leading-[1.8]">
            <span className="w-[22px] text-center">📱</span>
            <span>+57 311 629 88 67</span>
          </div>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-[#13284D] text-[22px] font-bold mb-[30px]">Redes Sociales</h3>

          <div className="flex flex-col gap-[15px] items-start max-[768px]:flex-row max-[768px]:flex-wrap max-[768px]:justify-start">
            <a href="https://www.instagram.com/grupoautomatic/" className="no-underline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C5CFF] py-[12px] px-[24px] rounded-[8px] text-[16px] transition-[.35s] shadow-[0_20px_35px_rgba(92,76,255,.25)] hover:-translate-y-[4px] max-[768px]:py-[10px] max-[768px]:px-[18px] max-[768px]:text-[14px]">Instagram</a>
            <a href="https://www.facebook.com/grupoautomaticoficial/" className="no-underline text-white bg-gradient-to-r from-[#4F46E5] to-[#7C5CFF] py-[12px] px-[24px] rounded-[8px] text-[16px] transition-[.35s] shadow-[0_20px_35px_rgba(92,76,255,.25)] hover:-translate-y-[4px] max-[768px]:py-[10px] max-[768px]:px-[18px] max-[768px]:text-[14px]">Facebook</a>

          </div>
        </div>

      </div>

      <hr className="border-none border-t border-[rgba(0,0,0,.08)] m-0" />

      <div className="flex justify-center items-center gap-[120px] bg-gradient-to-b from-[#13284D] to-[#203A73] py-[25px] px-[8%] max-[768px]:flex-col max-[768px]:gap-[10px]">
        <p className="text-[rgba(255,255,255,.85)] text-[16px] m-0">© 2026 Grupo Automatic. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
