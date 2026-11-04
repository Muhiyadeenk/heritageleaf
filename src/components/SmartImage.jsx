import { useState } from "react";

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#3a6b50'/><stop offset='1' stop-color='#183325'/></linearGradient></defs>
      <rect width='800' height='800' fill='url(#g)'/>
      <circle cx='400' cy='400' r='170' fill='none' stroke='#D8B878' stroke-width='6' opacity='.6'/>
      <path d='M400 270c90 40 120 130 60 220-60 60-150 50-190-20-30-70 10-160 130-200z' fill='#D8B878' opacity='.9'/>
      <path d='M400 300v220' stroke='#183325' stroke-width='8'/>
    </svg>`
  );

export default function SmartImage({ src, alt, className = "" }) {
  const [bad, setBad] = useState(false);
  return (
    <img
      src={bad ? FALLBACK : src}
      alt={alt}
      loading="lazy"
      onError={() => setBad(true)}
      className={className}
    />
  );
}
