import React, { useEffect, useRef, useState } from "react";

// Nova marca Ponte Social sobre fundo preto (#000000). O canvas remove o
// fundo preto tornando-o transparente, mantendo apenas a tipografia e os
// traços do logo. O tamanho é controlado pela altura via className.
const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/f8aa2092e_WhatsAppImage2026-09-11at09381721.png";

export default function Logo({ theme = "brand", className = "" }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = LOGO_URL;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      try {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = data.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          const mx = Math.max(r, g, b);
          // Remove preto puro e tons muito escuros (fundo). Mantém as cores
          // do logo (verde-floresta, azul-ardósia, verde-sálvia) que têm canais
          // significativamente maiores que 0.
          if (mx < 18) {
            d[i + 3] = 0; // totalmente transparente
          } else if (mx < 40) {
            // transição suave para preservar bordas anti-alias do texto
            d[i + 3] = Math.round(d[i + 3] * ((mx - 18) / 22));
          }
        }
        ctx.putImageData(data, 0, 0);
      } catch (e) {
        // se o canvas for tainted, usa a imagem original
      }
      setReady(true);
    };
    img.onerror = () => setReady(true);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Ponte Social Consultoria — relacionamento e mediação"
      className={`h-16 lg:h-20 w-auto object-contain transition-opacity duration-700 ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
      draggable={false}
    />
  );
}