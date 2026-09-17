import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/6aa331bf5cf4993602fef0a7/fa3ce29c6_ChatGPTImage14desetde202617_48_09.png";

export default function Logo({ theme = "brand", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Ponte Social Consultoria"
      className={`object-contain h-[106px] w-[106px] lg:h-[104px] lg:w-[104px] shrink-0 ${className}`}
    />
  );
}