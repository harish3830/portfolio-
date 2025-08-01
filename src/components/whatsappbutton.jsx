// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = '919508033830';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-6 right-6 bg-green-300 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
