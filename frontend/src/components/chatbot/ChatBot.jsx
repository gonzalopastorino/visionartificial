import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FloatingButton from "./FloatingButton";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

import { sendMessageToAI } from "../../services/chatService";
import { INITIAL_MESSAGE } from "../../constants/chat";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    INITIAL_MESSAGE,
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentMessage = input;

    const userMessage = {
      text: currentMessage,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
  })
};

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setLoading(true);

    try {
      const data = await sendMessageToAI(
        currentMessage
      );


      const botMessage = {
        text: data.reply,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

    } catch (error) {
      console.log(error);

      const errorMessage = {
        text: "Ocurrió un error al conectar con la IA.",
        sender: "bot",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <FloatingButton
          onClick={() => setIsOpen(true)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              bottom-0
              right-0
              w-full
              h-full
              sm:bottom-5
              sm:right-5
              sm:w-95
              sm:h-150
              bg-white
              border
              border-gray-200
              sm:rounded-3xl
              shadow-2xl
              flex
              flex-col
              overflow-hidden
              z-50
            "
          >
            <ChatHeader
              onClose={() => setIsOpen(false)}
            />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">

              {messages.map((message, index) => (
                <MessageBubble
                  key={index}
                  message={message}
                />
              ))}

              {loading && <TypingIndicator />}

              <div ref={messagesEndRef} />

            </div>

            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              handleKeyDown={handleKeyDown}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}