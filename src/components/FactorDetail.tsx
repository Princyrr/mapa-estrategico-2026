import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  MessageSquareQuote,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Factor, SubItem, Objective } from "../data/strategicMap";
import { API_URL } from "../config";

/* ---------------- TYPES ---------------- */

interface InitiativeStatus {
  initiativeId: string;
  completed: boolean;
  observation?: string;
  link?: string;
}

/* ---------------- OBJECTIVE ---------------- */

interface ObjectiveCardProps {
  objective: Objective;
  color: string;
  completedMap: Record<
    string,
    { completed: boolean; observation: string; link?: string }
  >;
}

function ObjectiveCard({ objective, color, completedMap }: ObjectiveCardProps) {
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
            {objective.initiatives?.map((initiative) => {
              const done = completedMap[initiative.id]?.completed;

              return (
                <li key={initiative.id} className="text-slate-300 text-sm">
                  <div className="flex items-start gap-3 group">
                    <div
                      className="
    w-[18px] h-[18px] mt-1 flex items-center justify-center
    rounded-md border shrink-0 transition-all
  "
                      style={
                        done
                          ? {
                              backgroundColor: color,
                              borderColor: color,
                              boxShadow: `0 0 8px ${color}`,
                            }
                          : {
                              borderColor: "rgba(255,255,255,0.25)",
                              backgroundColor: "rgba(255,255,255,0.05)",
                            }
                      }
                    >
                      {done && <CheckCircle size={12} className="text-white" />}
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="leading-relaxed text-slate-300 group-hover:text-white transition">
                        {initiative.title}
                      </span>

                      {completedMap[initiative.id]?.observation?.trim() && (
                        <div
                          className="mt-2 w-full min-h-[100px] rounded-xl border p-4 text-xs shadow-sm backdrop-blur-sm flex flex-col"
                          style={{
                            borderColor: `${color}90`,
                            backgroundColor: `${color}10`,
                          }}
                        >
                          <div
                            className="flex items-center gap-1 mb-1 font-semibold"
                            style={{
                              color,
                              filter: "brightness(1.8)",
                              textShadow: `0 0 6px ${color}`,
                            }}
                          >
                            <MessageSquareQuote size={12} />
                            <span>Observação:</span>
                          </div>

                          <p className="text-slate-300 leading-relaxed">
                            {completedMap[initiative.id].observation}
                          </p>
                          {completedMap[initiative.id]?.link?.trim() && (
                            <a
                              href={completedMap[initiative.id].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 ml-auto flex w-fit items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold transition hover:opacity-80"
                              style={{
                                backgroundColor: `${color}15`,
                                color,
                                border: `1px solid ${color}40`,
                                filter: "brightness(1.8)",
                                textShadow: `0 0 6px ${color}`,
                              }}
                            >
                              📁 Arquivos
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
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
  completedMap: Record<
    string,
    { completed: boolean; observation: string; link?: string }
  >;
}

function SubItemCard({ subitem, color, completedMap }: SubItemCardProps) {
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
              completedMap={completedMap}
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
  const [completedMap, setCompletedMap] = useState<
    Record<string, { completed: boolean; observation: string; link?: string }>
  >({});

  useEffect(() => {
    const fetchData = () => {
      fetch(`${API_URL}/api/initiatives`)
        .then((res) => res.json())
        .then((data: InitiativeStatus[]) => {
          const map: Record<
            string,
            { completed: boolean; observation: string; link?: string }
          > = {};
          data.forEach((item) => {
            map[item.initiativeId] = {
              completed: item.completed,
              observation: item.observation || "",
              link: item.link || "",
            };
          });

          setCompletedMap(map);
        });
    };

    fetchData();

    const onFocus = () => fetchData();

    window.addEventListener("focus", onFocus);

    return () => window.removeEventListener("focus", onFocus);
  }, []);

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
              completedMap={completedMap}
            />
          ))}
        </div>
      </div>
    );
  }

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

        <div className="space-y-3">
          {factor.subitems.map((sub) => (
            <SubItemCard
              key={sub.id}
              subitem={sub}
              color={factor.color}
              completedMap={completedMap}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}
