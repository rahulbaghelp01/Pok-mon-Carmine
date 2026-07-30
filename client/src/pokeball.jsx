import React from 'react';

export const PokeBall = ({ size = 120, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* 1. Base Colors & Fills */}
      {/* Red Upper Half */}
      <path
        d="M30 100C30 61.3401 61.3401 30 100 30C138.66 30 170 61.3401 170 100H30Z"
        fill="#EE3939"
      />

      {/* Light Off-White Lower Half */}
      <path
        d="M30 100C30 138.66 61.3401 170 100 170C138.66 170 170 138.66 170 100H30Z"
        fill="#F0F4F8"
      />

      {/* Subtle Right Shadow on Lower Half */}
      <path
        d="M135 100C135 132 153 148 167 114C169 109.5 170 104.8 170 100H135Z"
        fill="#DFE5EC"
      />

      {/* 2. Highlights & Glare */}
      {/* Curved White Glare on Red Section */}
      <path
        d="M60 70C68 58 80 50 95 48"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* 3. Outer Accents & Floating Lines */}
      {/* Top Left Floating Dash */}
      <path
        d="M62 25C72 20 83 17 95 16"
        stroke="#1E304B"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Top Left Floating Dot */}
      <circle cx="107" cy="15" r="3.5" fill="#1E304B" />

      {/* 4. Main Outlines & Center Band */}
      {/* Main Outer Circle Outline */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="#1E304B"
        strokeWidth="8"
      />

      {/* Center Horizontal Divider Line */}
      <line
        x1="30"
        y1="100"
        x2="170"
        y2="100"
        stroke="#1E304B"
        strokeWidth="8"
      />

      {/* 5. Center Button */}
      {/* Button Outer Ring */}
      <circle
        cx="100"
        cy="100"
        r="20"
        fill="white"
        stroke="#1E304B"
        strokeWidth="8"
      />

      {/* Button Inner Dark Dot */}
      <circle
        cx="100"
        cy="100"
        r="7"
        fill="#1E304B"
      />
    </svg>
  );
};

export default PokeBall;