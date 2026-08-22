import React from "react";


export default function CardBack({ className = "", onClick }) {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 240 360"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`${className} transition-colors duration-300 hover:cursor-pointer h-90 w-60 lg:h-60 lg:w-45 xl:h-90 xl:w-60 rounded block box-border`}
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
          <feGaussianBlur stdDeviation="3" />
        </filter>

        <path
          id="arcTop"
          d="M 30 85 C 90 52, 150 52, 210 85"
          fill="none"
        />

        <path
          id="arcBottom"
          d="M 30 275 C 90 308, 150 308, 210 275"
          fill="none"
        />
      </defs>

      {/* Full Black Background Base */}
      <rect
        x="0"
        y="0"
        width="240"
        height="360"
        fill="url(#bg)"
        rx="8"
      />

      {/* Silver Outer Border Frame */}
      <rect
        x="2"
        y="2"
        width="236"
        height="356"
        rx="6"
        fill="none"
        stroke="url(#silver)"
        strokeWidth="3"
      />

      {/* Thin Inner Inset Line */}
      <rect
        x="10"
        y="10"
        width="220"
        height="340"
        rx="4"
        fill="none"
        stroke="#c9c9cd"
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {/* Radial Rings */}
      <g opacity="0.18">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M 120 180 m -${70 + i * 13},0 a ${
              70 + i * 13
            },${70 + i * 13} 0 1 1 ${
              (70 + i * 13) * 2
            },0`}
            fill="none"
            stroke="#5a5a60"
            strokeWidth="1"
            strokeDasharray={`${4 + i * 2} ${10 + i * 2}`}
          />
        ))}
      </g>

      {/* Center Pokéball */}
      <circle
        cx="120"
        cy="180"
        r="48"
        fill="#000000"
        stroke="url(#silver)"
        strokeWidth="2"
      />

      <path
        d="M 72 180 A 48 48 0 0 1 168 180 Z"
        fill="url(#ballTop)"
      />

      <path
        d="M 72 180 A 48 48 0 0 0 168 180 Z"
        fill="url(#ballBottom)"
      />

      <rect x="72" y="175" width="96" height="10" fill="#0a0a0b" />
      <rect x="72" y="175" width="96" height="2" fill="#3a3a3d" />
      <rect x="72" y="183" width="96" height="2" fill="#c7c7ca" />

      <circle
        cx="120"
        cy="180"
        r="14"
        fill="#0a0a0b"
        stroke="url(#silver)"
        strokeWidth="2"
      />

      <circle
        cx="120"
        cy="180"
        r="8"
        fill="#1c1c1e"
        stroke="#c7c7ca"
        strokeWidth="1.5"
      />

      <circle
        cx="116"
        cy="176"
        r="2"
        fill="#ffffff"
        opacity="0.7"
      />

      <ellipse
        cx="102"
        cy="160"
        rx="15"
        ry="9"
        fill="url(#ballSheen)"
        filter="url(#soft)"
      />

      {/* Text Headers */}
      <text
        fill="url(#silver)"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="2"
      >
        <textPath
          href="#arcTop"
          startOffset="50%"
          textAnchor="middle"
        >
          POKEMON
        </textPath>
      </text>

      <text
        fill="url(#silver)"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="2"
      >
        <textPath
          href="#arcBottom"
          startOffset="50%"
          textAnchor="middle"
        >
          CARMINE
        </textPath>
      </text>

      {/* Corner Accents */}
      {[
        [18, 18],
        [222, 18],
        [18, 342],
        [222, 342],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          <circle r="2.5" fill="#c7c7ca" opacity="0.8" />
          <circle
            r="5"
            fill="none"
            stroke="#c7c7ca"
            strokeOpacity="0.35"
          />
        </g>
      ))}
    </svg>
  );
}