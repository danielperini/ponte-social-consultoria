import React, { useEffect, useRef, useState } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/82c7a2f66_WhatsAppImage2026-09-11at0938171.jpeg";

// The logo source is a JPEG on a white background. We remove the white on a
// canvas so the mark sits on a transparent background — larger and cleaner
// over the hero and the solid navbar. Sizing is height-driven via className.
export default function Logo({ theme = "brand", className = "" }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = data.data;
      for (let i = 0; i < d.length; i += 4) {
        const mn = Math.min(d[i], d[i + 1], d[i + 2]);
        if (mn > 222) {
          d[i + 3] = 0;
        } else if (mn > 200) {
          d[i + 3] = Math.round((mn - 200) / 22 * 120);
        }
      }
      ctx.putImageData(data, 0, 0);
      setReady(true);
    };
    img.src = LOGO_URL;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Ponte Social Consultoria"
      role="img"
      className={`h-11 lg:h-12 w-auto object-contain transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
      draggable={false}
    />
  );
}