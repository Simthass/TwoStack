"use client";

// Ultra-lightweight 64x64 precomputed base64 noise texture.
// Eliminates CPU/GPU software rasterization freezes caused by SVG feTurbulence.
const NOISE_TEXTURE = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vwAAACCCwTTAAAABnRSTlMAMwCFP1T6tV1zAAAAPklEQVQ4y2NgGAWjYBSMglEwCgYZmBgcHRyZGBicmNycGZgYXN0cuRkYHNxB2omJgcnDEQ4cGBgYXBjhNqMAlacK4RttNHEAAAAASUVORK5CYII=`;

export default function Grain() {
  return (
    <>
      <style>{`
        @keyframes grain-shift {
          0%   { transform: translate3d(0%, 0%, 0); }
          25%  { transform: translate3d(-2%, -4%, 0); }
          50%  { transform: translate3d(-4%, -2%, 0); }
          75%  { transform: translate3d(-2%, -4%, 0); }
          100% { transform: translate3d(0%, 0%, 0); }
        }
        .grain-layer {
          animation: grain-shift 14s linear infinite;
          will-change: transform;
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
          opacity: 0.04,
        }}
      >
        <div
          className="grain-layer"
          style={{
            position: "absolute",
            inset: "-10%",
            width: "120%",
            height: "120%",
            backgroundImage: `url("${NOISE_TEXTURE}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
    </>
  );
}
