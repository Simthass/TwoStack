// File: src/components/services/SystemStack.tsx

"use client";

export default function SystemStack() {
  const layers = [
    {
      code: "01",
      name: "Presence",
      y: 54,
      items: ["Website", "Storefront", "Client portal"],
    },
    {
      code: "02",
      name: "Automation",
      y: 234,
      items: ["WhatsApp AI", "Workflows", "Order tracking"],
    },
    {
      code: "03",
      name: "Intelligence",
      y: 414,
      items: ["Dashboards", "Forecasting", "Reporting"],
    },
  ];

  // viewBox needs to cover the last band fully: 414 + 140 (band height) + padding.
  const viewW = 640;
  const viewH = 600;

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
        <span className="text-sm font-satoshi font-semibold text-white">
          The system
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-inter text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
          one connected build
        </span>
      </div>

      {/* Responsive box driven by aspect-ratio instead of a fixed pixel
          height, so the SVG scales without ever clipping its own content. */}
      <div className="w-full" style={{ aspectRatio: `${viewW} / ${viewH}` }}>
        <svg
          viewBox={`0 0 ${viewW} ${viewH}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full block"
        >
          {/* central spine */}
          <line
            x1="60"
            y1="20"
            x2="60"
            y2={viewH - 20}
            stroke="white"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.15"
          />
          {/* travelling pulses */}
          <circle r="4" fill="#ffffff">
            <animateMotion
              dur="4.2s"
              repeatCount="indefinite"
              path={`M 60 20 L 60 ${viewH - 20}`}
            />
          </circle>
          <circle r="4" fill="#ffffff" opacity="0.5">
            <animateMotion
              dur="4.2s"
              begin="2.1s"
              repeatCount="indefinite"
              path={`M 60 20 L 60 ${viewH - 20}`}
            />
          </circle>

          {layers.map((layer) => (
            <g key={layer.code}>
              {/* connector from spine to band */}
              <line
                x1="60"
                y1={layer.y + 30}
                x2="96"
                y2={layer.y + 30}
                stroke="white"
                strokeWidth="1"
                opacity="0.15"
              />
              {/* node on spine */}
              <circle
                cx="60"
                cy={layer.y + 30}
                r="6"
                fill="white"
                stroke="#000000"
                strokeWidth="2.5"
              />

              {/* band */}
              <rect
                x="96"
                y={layer.y}
                width="500"
                height="140"
                rx="12"
                fill="white"
                stroke="white"
                strokeWidth="1"
                opacity="0.05"
              />
              <rect
                x="96"
                y={layer.y}
                width="500"
                height="140"
                rx="12"
                fill="#000000"
                stroke="white"
                strokeWidth="1"
                opacity="0.6"
              />
              <text
                x="120"
                y={layer.y + 34}
                fontFamily="Inter, sans-serif"
                fontSize="11"
                letterSpacing="0.5"
                fill="white"
                opacity="0.4"
              >
                {layer.code}
              </text>
              <text
                x="120"
                y={layer.y + 58}
                fontFamily="Satoshi, sans-serif"
                fontSize="21"
                fontWeight={700}
                fill="white"
              >
                {layer.name}
              </text>
              {layer.items.map((item, j) => (
                <g
                  key={item}
                  transform={`translate(${120 + j * 155}, ${layer.y + 82})`}
                >
                  <rect
                    width={145}
                    height={32}
                    rx={16}
                    fill="#000000"
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <text
                    x={72.5}
                    y={20}
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="12"
                    fontWeight={500}
                    fill="white"
                  >
                    {item}
                  </text>
                </g>
              ))}
            </g>
          ))}
        </svg>
      </div>

      <div className="flex gap-5 px-5 py-3.5 border-t border-white/10 text-xs font-inter text-white/40">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ffffff]" /> flows
          between layers
        </span>
        <span className="ml-auto">built as one system</span>
      </div>
    </div>
  );
}
