 

const PokeballBackpack = ({ size = 300, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 300 345"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <clipPath id="backpackBodyClip">
          <path d="M 60 120 C 60 40, 240 40, 240 120 L 240 280 C 240 300, 220 310, 200 310 L 100 310 C 80 310, 60 300, 60 280 Z" />
        </clipPath>
        <clipPath id="frontPocketClip">
          <path d="M 85 200 C 85 190, 215 190, 215 200 L 215 285 C 215 295, 205 300, 195 300 L 105 300 C 95 300, 85 295, 85 285 Z" />
        </clipPath>
      </defs>

      {/* Top Carrying Handle */}
      <path
        d="M 120 60 C 120 20, 180 20, 180 60"
        fill="none"
        stroke="#23272A"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Shoulder Straps — pulled in so they hug the body, not balloon out */}
      <path
        d="M 72 95 C 50 110, 50 260, 68 285"
        fill="none"
        stroke="#D32F2F"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M 228 95 C 250 110, 250 260, 232 285"
        fill="none"
        stroke="#D32F2F"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Side mesh pockets */}
      <path d="M 50 180 C 50 180, 45 250, 62 265 L 62 190 Z" fill="#2A2A2A" />
      <path d="M 250 180 C 250 180, 255 250, 238 265 L 238 190 Z" fill="#2A2A2A" />

      {/* Main backpack body */}
      <g clipPath="url(#backpackBodyClip)">
        <rect x="0" y="0" width="300" height="175" fill="#EE1515" />
        <rect x="0" y="175" width="300" height="170" fill="#F0F0F0" />
        <ellipse cx="110" cy="95" rx="20" ry="12" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 110 95)" />
        <rect x="0" y="160" width="300" height="28" fill="#222224" />
        <circle cx="150" cy="174" r="32" fill="#222224" />
        <circle cx="150" cy="174" r="22" fill="#FFFFFF" />
        <circle cx="150" cy="174" r="14" fill="#FFFFFF" stroke="#222224" strokeWidth="3" />
      </g>

      {/* Body outline */}
      <path
        d="M 60 120 C 60 40, 240 40, 240 120 L 240 280 C 240 300, 220 310, 200 310 L 100 310 C 80 310, 60 300, 60 280 Z"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="8"
      />

      {/* Front pocket */}
      <g clipPath="url(#frontPocketClip)">
        <rect x="0" y="190" width="300" height="30" fill="#CC1111" />
        <rect x="0" y="220" width="300" height="90" fill="#E6E6E6" />
        <line x1="85" y1="220" x2="215" y2="220" stroke="#222224" strokeWidth="4" />
      </g>

      <path
        d="M 85 200 C 85 190, 215 190, 215 200 L 215 285 C 215 295, 205 300, 195 300 L 105 300 C 95 300, 85 295, 85 285 Z"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="5"
      />

      <rect x="100" y="222" width="6" height="12" rx="2" fill="#222224" />
    </svg>
  );
};

export default PokeballBackpack;
