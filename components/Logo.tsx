export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sparkle icon */}
      <path
        d="M30 5L32 15L42 17L32 19L30 29L28 19L18 17L28 15L30 5Z"
        fill="#00A8E8"
        className="animate-pulse"
      />
      <path
        d="M45 12L46 18L52 19L46 20L45 26L44 20L38 19L44 18L45 12Z"
        fill="#00D9FF"
        opacity="0.7"
      />
      
      {/* Text */}
      <text
        x="60"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="#1F2937"
      >
        Neatfinity
      </text>
      
      {/* Underline accent */}
      <path
        d="M60 42 L180 42"
        stroke="#00A8E8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
