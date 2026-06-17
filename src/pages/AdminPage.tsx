import { useEffect, useState } from "react";
import { factors } from "../data/strategicMap";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { API_URL } from "../config";

interface InitiativeStatus {
  initiativeId: string;
  completed: boolean;
  observation?: string;
  link?: string;
}

export default function AdminPage() {
  const token = localStorage.getItem("token");
  const [completedMap, setCompletedMap] = useState<
    Record<
      string,
      {
        completed: boolean;
        observation: string;
        link: string;
      }
    >
  >({});

  const [openFactor, setOpenFactor] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openObj, setOpenObj] = useState<string | null>(null);

  useEffect(() => {
    loadStatuses();
  }, []);

  const loadStatuses = async () => {
    const res = await fetch(`${API_URL}/api/initiatives`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    const map: Record<
      string,
      { completed: boolean; observation: string; link: string }
    > = {};

    data.forEach((item: InitiativeStatus) => {
      map[item.initiativeId] = {
        completed: item.completed,
        observation: item.observation || "",
        link: item.link || "",
      };
    });

    setCompletedMap(map);
  };

  const handleToggle = async (
    initiativeId: string,
    completed: boolean,
    observation?: string,
    link?: string,
  ) => {
    const current = completedMap[initiativeId];

    const res = await fetch(`${API_URL}/api/initiatives`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        initiativeId,
        completed,
        observation: observation ?? current?.observation ?? "",
        link: link ?? current?.link ?? "",
      }),
    });

    const updated = await res.json();

    setCompletedMap((prev) => ({
      ...prev,
      [initiativeId]: {
        completed: updated.completed,
        observation: updated.observation || "",
        link: updated.link || "",
      },
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">
        Admin de Iniciativas
      </h1>

      <div className="space-y-4">
        {factors.map((factor) => {
          const isOpen = openFactor === factor.id;

          return (
            <div
              key={factor.id}
              className="rounded-xl border shadow-sm overflow-hidden"
              style={{ borderColor: `${factor.color}30` }}
            >
              {/* FACTOR */}
              <button
                onClick={() => setOpenFactor(isOpen ? null : factor.id)}
                className="w-full flex items-center justify-between p-5 transition"
                style={{ backgroundColor: `${factor.color}10` }}
              >
                <div
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: factor.color }}
                >
                  <span>{factor.icon}</span>
                  <span>{factor.label}</span>
                </div>

                {isOpen ? (
                  <ChevronDown size={18} style={{ color: factor.color }} />
                ) : (
                  <ChevronRight size={18} style={{ color: factor.color }} />
                )}
              </button>

              {/* SUBITEMS */}
              {isOpen && (
                <div className="p-5 space-y-4 bg-white">
                  {factor.subitems.map((sub) => {
                    const subOpen = openSub === sub.id;

                    return (
                      <div
                        key={sub.id}
                        className="border rounded-lg overflow-hidden"
                        style={{ borderColor: `${factor.color}25` }}
                      >
                        {/* SUB HEADER */}
                        <button
                          onClick={() => setOpenSub(subOpen ? null : sub.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition"
                        >
                          <span className="font-medium text-slate-700">
                            {sub.label}
                          </span>

                          {subOpen ? (
                            <ChevronDown
                              size={16}
                              style={{ color: factor.color }}
                            />
                          ) : (
                            <ChevronRight
                              size={16}
                              style={{ color: factor.color }}
                            />
                          )}
                        </button>

                        {/* OBJECTIVES */}
                        {subOpen && (
                          <div
                            className="p-4 space-y-3"
                            style={{ backgroundColor: `${factor.color}05` }}
                          >
                            {sub.objectives?.map((obj) => {
                              const objOpen = openObj === obj.title;

                              return (
                                <div key={obj.title}>
                                  {/* OBJECTIVE HEADER */}
                                  <button
                                    onClick={() =>
                                      setOpenObj(objOpen ? null : obj.title)
                                    }
                                    className="w-full flex items-center justify-between text-sm font-medium py-2"
                                    style={{ color: factor.color }}
                                  >
                                    {/* 🔵  */}
                                    <div className="flex items-center gap-2">
                                      <span
                                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                        style={{
                                          backgroundColor: factor.color,
                                        }}
                                      />
                                      <span>{obj.title}</span>
                                    </div>

                                    {objOpen ? (
                                      <ChevronDown size={14} />
                                    ) : (
                                      <ChevronRight size={14} />
                                    )}
                                  </button>

                                  {/* INITIATIVES */}
                                  {objOpen && (
                                    <div className="space-y-2 mt-2">
                                      {obj.initiatives?.map((init) => {
                                        const done =
                                          completedMap?.[init.id] &&
                                          completedMap[init.id] !== null
                                            ? completedMap[init.id].completed
                                            : false;
                                        return (
                                          <div
                                            key={init.id}
                                            className={`flex items-start gap-3 p-3 rounded-lg border transition cursor-pointer
    ${done ? "bg-emerald-50 border-emerald-300" : "bg-white border-slate-200"}`}
                                          >
                                            {/* CHECKBOX */}
                                            <div
                                              onClick={() =>
                                                handleToggle(init.id, !done)
                                              }
                                              className="w-5 h-5 mt-1 flex items-center justify-center rounded-md border flex-shrink-0"
                                              style={{
                                                backgroundColor: done
                                                  ? factor.color
                                                  : "transparent",
                                                borderColor: done
                                                  ? factor.color
                                                  : "#cbd5e1",
                                              }}
                                            >
                                              {done && (
                                                <Check
                                                  size={14}
                                                  className="text-white"
                                                />
                                              )}
                                            </div>

                                            {/* TEXTO + OBSERVAÇÃO */}
                                            <div className="flex-1">
                                              <div
                                                className={`font-medium transition ${
                                                  done ? "line-through" : ""
                                                }`}
                                                style={{
                                                  color: done
                                                    ? factor.color
                                                    : "#1f2937",
                                                }}
                                              >
                                                {init.title}
                                              </div>

                                              {/* 📝 OBSERVAÇÃO  */}
                                              <textarea
                                                value={
                                                  completedMap[init.id]
                                                    ?.observation || ""
                                                }
                                                placeholder="Adicionar observação..."
                                                onChange={(e) =>
                                                  setCompletedMap((prev) => ({
                                                    ...prev,
                                                    [init.id]: {
                                                      ...prev[init.id],
                                                      observation:
                                                        e.target.value,
                                                    },
                                                  }))
                                                }
                                                onBlur={() =>
                                                  handleToggle(
                                                    init.id,
                                                    done,
                                                    completedMap[init.id]
                                                      ?.observation,
                                                  )
                                                }
                                                className="mt-2 w-full text-xs p-2 rounded-md border border-slate-200 
             focus:outline-none focus:ring-2 focus:ring-slate-300
             text-slate-700 bg-white"
                                              />
                                              {/* 🔗 LINK */}
                                              <input
                                                type="text"
                                                value={
                                                  completedMap[init.id]?.link ||
                                                  ""
                                                }
                                                placeholder="Adicionar link de arquivos..."
                                                onChange={(e) =>
                                                  setCompletedMap((prev) => ({
                                                    ...prev,
                                                    [init.id]: {
                                                      ...prev[init.id],
                                                      link: e.target.value,
                                                    },
                                                  }))
                                                }
                                                onBlur={() =>
                                                  handleToggle(
                                                    init.id,
                                                    done,
                                                    completedMap[init.id]
                                                      ?.observation,
                                                    completedMap[init.id]?.link,
                                                  )
                                                }
                                                className="mt-2 w-full text-xs p-2 rounded-md border border-slate-200 
  focus:outline-none focus:ring-2 focus:ring-slate-300
  text-slate-700 bg-white"
                                              />
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
