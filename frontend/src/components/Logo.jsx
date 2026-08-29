import React from "react";

export const Logo = ({ size = "md", showTagline = true }) => {
  const dim = size === "lg" ? 56 : size === "sm" ? 34 : 44;

  return (
    <div className="flex items-center gap-3 select-none" data-testid="brand-logo">
      <div
        className="relative flex items-center justify-center rounded-xl"
        style={{
          width: dim,
          height: dim,
          background: "linear-gradient(135deg, rgba(0,210,210,0.12), rgba(0,210,210,0.02))",
          border: "1px solid rgba(0,210,210,0.35)",
          boxShadow: "0 0 24px rgba(0,210,210,0.18), inset 0 0 12px rgba(0,210,210,0.08)",
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width={dim * 0.62}
          height={dim * 0.62}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left plate */}
          <rect x="4" y="22" width="6" height="20" rx="1.5" fill="#00D2D2" />
          <rect x="12" y="18" width="4" height="28" rx="1" fill="#00D2D2" />
          {/* Bar */}
          <rect x="16" y="30" width="32" height="4" rx="1" fill="#00D2D2" />
          {/* Right = power ring */}
          <circle
            cx="52"
            cy="32"
            r="10"
            stroke="#00D2D2"
            strokeWidth="3"
            fill="none"
            strokeDasharray="42 12"
            strokeLinecap="round"
            transform="rotate(-90 52 32)"
          />
          <rect x="50.5" y="24" width="3" height="9" rx="1.5" fill="#00D2D2" />
        </svg>
      </div>

      <div className="leading-none">
        <div
          className="text-[#F5F5F5] tracking-tight"
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 700,
            fontSize: size === "lg" ? "1.75rem" : size === "sm" ? "1.1rem" : "1.4rem",
            letterSpacing: "-0.02em",
          }}
        >
          shape<span className="text-[#00D2D2]">OS</span>
        </div>
        {showTagline && (
          <div
            className="text-zinc-500 mt-1"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: size === "lg" ? "0.75rem" : "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            ficha fácil
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
