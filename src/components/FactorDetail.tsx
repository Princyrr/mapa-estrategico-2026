import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import type { Factor, SubItem, Objective } from "../data/strategicMap";

/* ---------------- OBJECTIVE ---------------- */

interface ObjectiveCardProps {
  objective: Objective;
  color: string;
}

function ObjectiveCard({ objective, color }: ObjectiveCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl border transition-all mt-3 overflow-hidden"
      style={{
        borderColor: `${color}30`,
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-all group"
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-white text-sm font-medium group-hover:translate-x-0.5 transition">
            {objective.title}
          </span>
        </div>

        {open ? (
          <ChevronUp size={16} className="text-slate-400" />
        ) : (
          <ChevronDown size={16} className="text-slate-400" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 bg-white/2 border-t border-white/5">
          <div className="flex items-center gap-2 bg-zinc-500/15 p-2 text-slate-100 text-sm font-semibold mb-3 mt-3">
            <CheckCircle size={12} style={{ color }} />
            Iniciativas
          </div>

          <ul className="space-y-2">
            {objective.initiatives?.map((initiative) => (
              <li key={initiative} className="text-slate-300 text-sm">
                <div className="flex gap-2 items-start">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="leading-relaxed">{initiative}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------------- SUBITEM ---------------- */

interface SubItemCardProps {
  subitem: SubItem;
  color: string;
}

function SubItemCard({ subitem, color }: SubItemCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl border overflow-hidden transition-all"
      style={{
        borderColor: `${color}25`,
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-all group"
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-white text-sm font-semibold group-hover:translate-x-0.5 transition">
            {subitem.label}
          </span>
        </div>

        {open ? (
          <ChevronUp size={16} className="text-slate-400" />
        ) : (
          <ChevronDown size={16} className="text-slate-400" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 bg-black/10 border-t border-white/5">
          {subitem.objectives?.map((objective) => (
            <ObjectiveCard
              key={objective.title}
              objective={objective}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- FACTOR DETAIL ---------------- */

interface FactorDetailProps {
  factor: Factor | null;
  subitem?: SubItem | null;
}

export default function FactorDetail({ factor, subitem }: FactorDetailProps) {
  if (!factor && !subitem) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-16 px-6">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
          <div className="w-8 h-8 rounded-full border border-dashed border-white/20" />
        </div>
        <p className="text-slate-400 text-sm">
          ⬅️ Clique em um setor ao lado
          <br />
          para ver os detalhes
        </p>
      </div>
    );
  }

  /* ---------------- SUBITEM VIEW ---------------- */

  if (subitem && factor) {
    return (
      <div className="p-6 h-full overflow-y-auto">
        <div className="mb-6">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
            style={{ backgroundColor: factor.color }}
          >
            {factor.label}
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{subitem.label}</h3>
        </div>

        <div className="space-y-3">
          {subitem.objectives?.map((objective) => (
            <ObjectiveCard
              key={objective.title}
              objective={objective}
              color={factor.color}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- FACTOR VIEW ---------------- */

  if (factor) {
    return (
      <div className="p-6 h-full overflow-y-auto">
        <div className="mb-6">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
            style={{ backgroundColor: factor.color }}
          >
            {factor.label}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            {factor.icon} {factor.label}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed">
            {factor.description}
          </p>
        </div>

        <div>
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-3">
            Subtemas Estratégicos
          </p>

          <div className="space-y-3">
            {factor.subitems.map((sub) => (
              <SubItemCard key={sub.id} subitem={sub} color={factor.color} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
