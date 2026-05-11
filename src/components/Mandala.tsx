import { factors } from "../data/strategicMap";

const INNER_RADIUS = 65;
const MID_RADIUS = 190;
const OUTER_RADIUS = 270;
const CX = 270;
const CY = 270;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number,
) {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle);

  const largeArc = endAngle - startAngle > 180 ? "1" : "0";

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
}

function wrapText(text: string, maxChars: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }

  if (current) lines.push(current);
  return lines;
}

interface MandalaProps {
  activeId: string | null;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}

export default function Mandala({ activeId, onHover, onClick }: MandalaProps) {
  const usedFactors = factors.slice(0, 8);

  const totalSubitems = usedFactors.reduce(
    (sum, f) => sum + f.subitems.length,
    0,
  );

  let currentAngle = 0;
  const gap = 0.6;

  return (
    <div className="flex items-center justify-center w-full">
      <svg viewBox="0 0 540 540" className="w-full h-auto max-w-[1400px]">
        <defs>
          <radialGradient id="bgGlow">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodOpacity="0.5" />
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r={260} fill="url(#bgGlow)" />

        <circle cx={CX} cy={CY} r={INNER_RADIUS} fill="#020617" />

        <text
          x={CX}
          y={CY - 20}
          textAnchor="middle"
          fill="#93c5fd"
          fontSize="10"
        >
          O CAMINHO
        </text>

        <text
          x={CX}
          y={CY - 1}
          textAnchor="middle"
          fill="#93c5fd"
          fontSize="10"
        >
          PARA A
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" fill="white" fontSize="10">
          NOVA INDÚSTRIA
        </text>

        {usedFactors.map((factor) => {
          const factorAngle = (factor.subitems.length / totalSubitems) * 360;

          const startAngle = currentAngle;
          const endAngle = currentAngle + factorAngle;
          const midAngle = (startAngle + endAngle) / 2;

          const isFactorActive =
            activeId === factor.id ||
            factor.subitems.some((s) => s.id === activeId);

          const factorPath = describeArc(
            CX,
            CY,
            INNER_RADIUS + 4,
            MID_RADIUS,
            startAngle + gap,
            endAngle - gap,
          );

          const labelPos = polarToCartesian(
            CX,
            CY,
            (INNER_RADIUS + MID_RADIUS) / 2,
            midAngle,
          );

          const lines = wrapText(factor.label, 14);

          const subAngleSize = factorAngle / factor.subitems.length;

          const subElements = factor.subitems.map((sub, i) => {
            const sa = startAngle + i * subAngleSize;
            const ea = sa + subAngleSize;
            const subMid = (sa + ea) / 2;

            const isSubActive = activeId === sub.id;

            const subPath = describeArc(
              CX,
              CY,
              MID_RADIUS + 2,
              OUTER_RADIUS,
              sa + gap,
              ea - gap,
            );

            const textPos = polarToCartesian(
              CX,
              CY,
              MID_RADIUS + (OUTER_RADIUS - MID_RADIUS) * 0.5,
              subMid,
            );

            const subLines = wrapText(sub.label, 16);

            return (
              <g
                key={sub.id}
                onMouseEnter={() => onHover(sub.id)}
                onMouseLeave={() => onHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(sub.id);
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  d={subPath}
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth={20}
                />

                <path
                  d={subPath}
                  fill={factor.lightColor}
                  opacity={
                    isSubActive
                      ? 1
                      : isFactorActive
                        ? 0.85
                        : activeId
                          ? 0.2
                          : 0.9
                  }
                  stroke="rgba(255,255,255,0.1)"
                  style={{ transition: "opacity 0.25s ease" }}
                />

                <g
                  transform={`translate(${textPos.x}, ${textPos.y}) rotate(${
                    subMid > 180 ? subMid + 90 : subMid - 90
                  })`}
                >
                  {subLines.map((line, li) => (
                    <text
                      key={li}
                      textAnchor="middle"
                      y={(li - (subLines.length - 1) / 2) * 7}
                      fontSize="6"
                      fill="#1f2937"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              </g>
            );
          });

          currentAngle += factorAngle;

          return (
            <g
              key={factor.id}
              onMouseEnter={() => onHover(factor.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onClick(factor.id)}
              style={{ cursor: "pointer" }}
            >
              <path
                d={factorPath}
                fill="transparent"
                stroke="transparent"
                strokeWidth={20}
              />

              <path
                d={factorPath}
                fill={factor.color}
                opacity={isFactorActive ? 1 : activeId ? 0.25 : 0.9}
                stroke="rgba(255,255,255,0.15)"
                filter={isFactorActive ? "url(#shadow)" : undefined}
                style={{ transition: "opacity 0.25s ease" }}
              />
              <g
                transform={`translate(${labelPos.x}, ${labelPos.y}) rotate(${
                  midAngle > 180 ? midAngle + 90 : midAngle - 90
                })`}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(factor.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {lines.map((line, li) => (
                  <text
                    key={li}
                    textAnchor="middle"
                    y={(li - (lines.length - 1) / 2) * 10}
                    fontSize="9"
                    fill="white"
                    fontWeight="600"
                  >
                    {line}
                  </text>
                ))}
              </g>

              {subElements}
            </g>
          );
        })}

        <circle
          cx={CX}
          cy={CY}
          r={OUTER_RADIUS}
          fill="none"
          stroke="rgba(148,163,184,0.2)"
        />
      </svg>
    </div>
  );
}
