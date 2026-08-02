import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        w-fit
        px-4
        py-3
        rounded-2xl
        rounded-bl-md
        bg-gray-100
        border
        border-gray-200
        shadow-sm
      "
    >
      <div className="flex items-center gap-1">
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#17325C]"
        />

        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: 0.15,
          }}
          className="w-2 h-2 rounded-full bg-[#17325C]"
        />

        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: 0.3,
          }}
          className="w-2 h-2 rounded-full bg-[#17325C]"
        />
      </div>
    </motion.div>
  );
}