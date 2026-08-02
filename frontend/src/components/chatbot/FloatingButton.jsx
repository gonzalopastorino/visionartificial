import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

export default function FloatingButton({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      {/* Cartel */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          hidden
          md:flex
          flex-col
          bg-white
          rounded-xl
          shadow-xl
          px-4
          py-2
          border
          border-gray-200
        "
      >
        <span className="text-sm font-semibold text-[#17325C]">
          Asistente IA
        </span>

        <span className="text-xs text-gray-500">
          ¿Necesitas ayuda?
        </span>
      </motion.div>

      {/* Botón */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0px rgba(23,50,92,.4)",
            "0 0 20px rgba(23,50,92,.4)",
            "0 0 0px rgba(23,50,92,.4)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        onClick={onClick}
        className="
          relative
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-[#17325C]
          hover:bg-[#21457d]
          text-white
          shadow-2xl
          transition-all
        "
      >
        <FiMessageCircle size={30} />

        {/* Indicador Online */}
        <span
          className="
            absolute
            top-2
            right-2
            w-3
            h-3
            rounded-full
            bg-green-400
            border-2
            border-white
          "
        />
      </motion.button>
    </motion.div>
  );
}