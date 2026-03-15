import { useState } from "react";
import { Send, X } from "lucide-react";

const ModalContainer = ({ status, setIsVisible }) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(false);
    setIsVisible(false);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`
          absolute inset-0 bg-black/40 backdrop-blur-sm
          ${isClosing ? "animate-backdrop-out" : "animate-backdrop-in"}
        `}
      />

      {/* Modal Card */}
      <div
        className={`
          relative z-10 w-full max-w-md mx-4
          rounded-2xl bg-card shadow-card p-8 text-center
          ${isClosing ? "animate-modal-out" : "animate-modal-in"}
        `}
      >
        {/* Close icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <Send size={28} className="text-gold" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-navy mb-2">
          {status === "success" ? "Message Sent!" : "Message Failed!"}
        </h3>
        <p className="text-text-secondary mb-6">
          {status === "success"
            ? "Thank you for reaching out. I'll get back to you soon."
            : "Sorry for the inconvenience, please try again."}
        </p>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="btn-primary w-full cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalContainer;
