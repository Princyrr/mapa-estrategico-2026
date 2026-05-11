import {
  Users,
  BookOpen,
  Target,
  TrendingUp,
  Flag,
  Milestone,
} from "lucide-react";

interface StepProps {
  title: string;
  description: string;
  color: string;
  icon: React.ElementType;
  side: "left" | "right";
  dotPosition?: "before" | "after";
}

function Step({
  title,
  description,
  color,
  icon: Icon,
  side,
  dotPosition,
}: StepProps) {
  const isLeft = side === "left";

  const label = (
    <div className={`flex-1 ${isLeft ? "pr-4 text-right" : "pl-4 text-left"}`}>
      <div className={`inline-block max-w-[170px]`}>
        <div
          className={`flex items-center gap-1.5 mb-1 ${
            isLeft ? "justify-end" : "justify-start"
          }`}
        >
          {isLeft && dotPosition === "after" && (
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: color }}
            />
          )}
          {!isLeft && dotPosition === "before" && (
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: color }}
            />
          )}

          <span className="font-bold text-sm leading-tight" style={{ color }}>
            {title}
          </span>

          {isLeft && dotPosition === "before" && (
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: color }}
            />
          )}
          {!isLeft && dotPosition === "after" && (
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: color }}
            />
          )}
        </div>

        <div className="mb-4 border-t border-slate-700/50" />

        <p className="text-slate-300 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );

  const iconNode = (
    <div
      className="
        flex-shrink-0 flex items-center justify-center
        rounded-2xl shadow-lg border
        backdrop-blur-md
      "
      style={{
        width: 68,
        height: 68,
        background: `${color}15`,
        borderColor: `${color}40`,
      }}
    >
      <Icon size={28} color={color} strokeWidth={1.6} />
    </div>
  );

  return (
    <div className="flex items-start w-full">
      {isLeft ? (
        <>
          {label}
          {iconNode}
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          {iconNode}
          {label}
        </>
      )}
    </div>
  );
}

export default function RoadmapInfographic() {
  return (
    <div className="relative flex items-start justify-center py-16 px-4 overflow-hidden min-h-screen">
      {/* brush no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full top-[80px] left-1/2 -translate-x-1/2" />
        <div className="absolute w-[400px] h-[300px] bg-blue-500/10 blur-3xl rounded-full bottom-[100px] left-1/2 -translate-x-1/2" />
      </div>
      {/* circulos */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="absolute rounded-full w-[380px] h-[380px] border border-slate-700 top-[5%] left-1/2 -translate-x-1/2" />
        <div className="absolute rounded-full w-[240px] h-[240px] border border-slate-700 top-[13%] left-1/2 -translate-x-1/2" />
        <div className="absolute rounded-full w-[380px] h-[380px] border border-slate-700 top-[55%] left-1/2 -translate-x-1/2" />
        <div className="absolute rounded-full w-[240px] h-[240px] border border-slate-700 top-[59%] left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative w-full max-w-[480px]">
        {/* Line */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 34,
            left: 0,
            width: "80%",
            height: "calc(100% - 30px)",
            zIndex: 0,
          }}
          viewBox="0 0 480 860"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 310 34
              C 300 90, 300 70, 280 160
              C 280 270, 300 250, 320 320
              C 350 360, 280 340, 270 500
              C 360 650, 310 660, 300 700
              C 290 730, 310 750, 310 800
            "
            stroke="rgba(52, 211, 153, 0.35)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          className="relative flex flex-col gap-[52px]"
          style={{ zIndex: 1 }}
        >
          <Step
            title="Fator-chave"
            description="Fatores críticos para promoção da competitividade e desenvolvimento da indústria brasileira na próxima década"
            color="#34d399"
            icon={Users}
            side="left"
            dotPosition="before"
          />

          <Step
            title="Temas prioritários"
            description="Principais desafios, possíveis soluções e benefícios esperados ao seguirmos na direção recomendada"
            color="#60a5fa"
            icon={BookOpen}
            side="right"
            dotPosition="before"
          />

          <Step
            title="Objetivos"
            description="Objetivo de cada tema prioritário. Deve conter a finalidade de cada tema"
            color="#22c55e"
            icon={Target}
            side="left"
            dotPosition="before"
          />

          <Step
            title="Indicadores"
            description="Métricas relevantes para avaliação contínua do objetivo de cada tema prioritário"
            color="#38bdf8"
            icon={TrendingUp}
            side="right"
            dotPosition="before"
          />

          <Step
            title="Metas"
            description="Resultados específicos que devem ser atingidos para atender o objetivo proposto"
            color="#f59e0b"
            icon={Flag}
            side="left"
            dotPosition="before"
          />

          <Step
            title="Iniciativas"
            description="Quais devem ser as ações para atingir as metas propostas"
            color="#a78bfa"
            icon={Milestone}
            side="right"
            dotPosition="before"
          />
        </div>
      </div>
    </div>
  );
}
