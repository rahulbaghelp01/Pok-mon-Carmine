import React from "react";

export default function CardBack() {
  return (
    <svg
      width="360"
      height="502"
      viewBox="0 0 460 640"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "0 auto" }}
    >
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#26262a" />
          <stop offset="55%" stopColor="#101012" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8a8a90" />
          <stop offset="50%" stopColor="#f0f0f2" />
          <stop offset="100%" stopColor="#8a8a90" />
        </linearGradient>

        <linearGradient id="ballTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3d" />
          <stop offset="100%" stopColor="#111113" />
        </linearGradient>
        <linearGradient id="ballBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e7e7ea" />
          <stop offset="100%" stopColor="#9a9a9e" />
        </linearGradient>

        <radialGradient id="ballSheen" cx="35%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>

        {/* Top Arc */}
        <path id="arcTop" d="M 70 150 C 170 95, 290 95, 390 150" fill="none" />

        {/* Bottom Arc */}
        <path id="arcBottom" d="M 70 490 C 170 545, 290 545, 390 490" fill="none" />
      </defs>

      {/* Card Base */}
      <rect
        x="8"
        y="8"
        width="444"
        height="624"
        rx="26"
        fill="url(#bg)"
        stroke="url(#silver)"
        strokeWidth="4"
      />

      <rect
        x="20"
        y="20"
        width="420"
        height="600"
        rx="18"
        fill="none"
        stroke="#c9c9cd"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />

      {/* Radial Rings */}
      <g opacity="0.18">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M 230 300 m -${140 + i * 26},0 a ${140 + i * 26},${
              140 + i * 26
            } 0 1 1 ${(140 + i * 26) * 2},0`}
            fill="none"
            stroke="#5a5a60"
            strokeWidth="1.2"
            strokeDasharray={`${6 + i * 3} ${18 + i * 4}`}
          />
        ))}
      </g>

      {/* Center Ball */}
      <circle
        cx="230"
        cy="300"
        r="92"
        fill="#000000"
        stroke="url(#silver)"
        strokeWidth="3"
      />

      <path d="M 138 300 A 92 92 0 0 1 322 300 Z" fill="url(#ballTop)" />
      <path d="M 138 300 A 92 92 0 0 0 322 300 Z" fill="url(#ballBottom)" />

      <rect x="138" y="291" width="184" height="18" fill="#0a0a0b" />
      <rect x="138" y="291" width="184" height="4" fill="#3a3a3d" />
      <rect x="138" y="305" width="184" height="4" fill="#c7c7ca" />

      <circle cx="230" cy="300" r="26" fill="#0a0a0b" stroke="url(#silver)" strokeWidth="3" />
      <circle cx="230" cy="300" r="15" fill="#1c1c1e" stroke="#c7c7ca" strokeWidth="2" />
      <circle cx="223" cy="293" r="4" fill="#ffffff" opacity="0.7" />

      <ellipse
        cx="196"
        cy="262"
        rx="30"
        ry="18"
        fill="url(#ballSheen)"
        filter="url(#soft)"
      />

      {/* Top Header: RAHUL */}
      <text
        fill="url(#silver)"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        letterSpacing="4"
      >
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
          POKEMON
        </textPath>
      </text>

      {/* Bottom Header: CARMINE */}
      <text
        fill="url(#silver)"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        letterSpacing="4"
      >
        <textPath href="#arcBottom" startOffset="50%" textAnchor="middle">
          CARMINE
        </textPath>
      </text>

      {/* Corner Accents */}
      {[
        [34, 34],
        [426, 34],
        [34, 606],
        [426, 606],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          <circle r="5" fill="#c7c7ca" opacity="0.8" />
          <circle r="9" fill="none" stroke="#c7c7ca" strokeOpacity="0.35" />
        </g>
      ))}
    </svg>
  );
}