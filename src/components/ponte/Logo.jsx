import React from "react";

// Nova marca Ponte Social sobre fundo branco (#FFFFFF), pronta para uso direto.
// O tamanho é controlado pela altura via className.
const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/6a68fc317_fundotranspartne1.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria — relacionamento e mediação"
      className={`h-20 lg:h-28 w-auto object-contain ${className}`}
      draggable={false}
    />
  );
}