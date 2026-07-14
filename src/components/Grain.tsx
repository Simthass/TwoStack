"use client";

export default function Grain() {
  return (
    <>
      <style>{`
        @keyframes grain-shift {
          0%   { transform: translateX(0%) translateY(0%); }
          25%  { transform: translateX(-5%) translateY(-10%); }
          50%  { transform: translateX(-10%) translateY(-5%); }
          75%  { transform: translateX(-5%) translateY(-10%); }
          100% { transform: translateX(0%) translateY(0%); }
        }
        .grain-layer {
          animation: grain-shift 14s linear infinite;
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          pointerEvents: "none",
          overflow: "hidden",
          opacity: 0.05,
        }}
      >
        <div
          className="grain-layer"
          style={{
            position: "absolute",
            inset: "-30%",
            width: "160%",
            height: "160%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "220px 220px",
          }}
        />
      </div>
    </>
  );
}
