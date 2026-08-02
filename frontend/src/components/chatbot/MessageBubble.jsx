import { motion } from "framer-motion";
import { BsCheck2All } from "react-icons/bs";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[80%]
          px-4
          py-3
          rounded-2xl
          shadow-sm
          text-sm
          leading-relaxed
          ${
            isUser
              ? "bg-[#17325C] text-white rounded-br-md"
              : "bg-gray-100 text-gray-800 border border-gray-200 rounded-bl-md"
          }
        `}
      >
        <p className="whitespace-pre-wrap">
          {message.text}
        </p>

        <div
          className={`
            flex
            items-center
            justify-end
            gap-1
            mt-2
            text-[11px]
            ${
              isUser
                ? "text-blue-100"
                : "text-gray-500"
            }
          `}
        >
          {message.time && (
            <span>{message.time}</span>
          )}

          {isUser && (
            <BsCheck2All className="text-blue-200 text-sm" />
          )}
        </div>
      </div>
    </motion.div>
  );
}