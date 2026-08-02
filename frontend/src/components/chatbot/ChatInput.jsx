import { FiSend } from "react-icons/fi";

export default function ChatInput({
  input,
  setInput,
  sendMessage,
  handleKeyDown,
}) {
  return (
    <div
      className="
        p-4
        border-t
        border-gray-200
        bg-white
        flex
        gap-3
      "
    >
      <input
        type="text"
        placeholder="Escribí tu consulta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          flex-1
          bg-gray-50
          border
          border-gray-300
          rounded-xl
          px-4
          py-3
          text-gray-800
          placeholder:text-gray-500
          outline-none
          transition-all
          focus:border-[#17325C]
          focus:ring-2
          focus:ring-[#17325C]/20
        "
      />

      <button
        onClick={sendMessage}
        className="
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-xl
          bg-[#17325C]
          hover:bg-[#21457d]
          active:scale-95
          transition-all
          text-white
          shadow-md
        "
      >
        <FiSend size={20} />
      </button>
    </div>
  );
}