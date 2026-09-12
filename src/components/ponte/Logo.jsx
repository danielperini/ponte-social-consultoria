import React from "react";

// Nova marca Ponte Social. O fundo creme (#F7F6F5) faz parte do design da marca
// e é mantido para garantir leitura sobre o hero escuro e o rodapé. O tamanho
// é controlado pela altura via className.
const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/ee4e0fed3_WhatsAppImage2026-09-11at0938172.jpeg";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria — relacionamento e mediação"
      className={`h-16 lg:h-20 w-auto object-contain ${className}`}
      draggable={false}
    />
  );
}