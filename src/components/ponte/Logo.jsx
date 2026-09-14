import React, { useEffect, useRef, useState } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/6a68fc317_fundotranspartne1.png";

// Marca Ponte Social. O fundo branco nativo da imagem é removido em canvas
// (alpha 0) para a marca ficar limpa sobre fundos claros e escuros.
// O tamanho é controlado pela altura via className; o padrão foi aumentado.
export default function Logo({ theme = "brand", className = "" }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const W = img.naturalWidth;
      const H = img.naturalHeight;
      const tmp = document.createElement("canvas");
      tmp.width = W;
      tmp.height = H;
      const tctx = tmp.getContext("2d");
      tctx.drawImage(img, 0, 0);
      const data = tctx.getImageData(0, 0, W, H);
      const d = data.data;
      // remove o fundo branco nativo
      for (let i = 0; i < d.length; i += 4) {
        if (d[i] > 238 && d[i + 1] > 238 && d[i + 2] > 238) d[i + 3] = 0;
      }
      tctx.putImageData(data, 0, 0);
      // recorta para a bounding-box da marca (elimina o padding transparente)
      let minX = W, minY = H, maxX = 0, maxY = 0;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          if (d[(y * W + x) * 4 + 3] !== 0) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      const bw = maxX - minX + 1;
      const bh = maxY - minY + 1;
      if (bw > 0 && bh > 0) {
        canvas.width = bw;
        canvas.height = bh;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, bw, bh);
        ctx.drawImage(tmp, minX, minY, bw, bh, 0, 0, bw, bh);
      }
      setReady(true);
    };
    img.src = LOGO_URL;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Ponte Social"
      role="img"
      className={`object-contain transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"} h-20 lg:h-32 w-auto ${className}`}
    />
  );
}