import { FiX } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";

export default function ChatHeader({ onClose }) {
  return (
    <div
      className="
        bg-[#17325C]
        text-white
        p-4
        border-b
        border-blue-800
        flex
        items-center
        justify-between
        shadow-md
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-11
            h-11
            rounded-full
            bg-white/15
            flex
            items-center
            justify-center
            border
            border-white/20
          "
        >
          <FiCpu size={22} />
        </div>

        <div>
          <h1 className="font-bold text-lg leading-none">
            Asistente IA
          </h1>

          <p className="text-blue-100 text-sm mt-1">
            Grupo Automatic • En línea
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="
          p-2
          rounded-full
          hover:bg-white/10
          transition-colors
        "
      >
        <FiX size={22} />
      </button>
    </div>
  );
}