import { useEffect, useState } from "react";
import iconlogo from "../assets/iconlogo.png";
import sairIcon from "../assets/sair.png";
import { factors } from "../data/strategicMap";
import {
  ChevronDown,
  ChevronRight,
  Check,
  Target,
  CheckCircle2,
  Clock3,
  TrendingUp,
} from "lucide-react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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

  const getFactorStats = (factorId: string) => {
    let total = 0;
    let done = 0;

    const factor = factors.find((f) => f.id === factorId);

    factor?.subitems.forEach((sub) => {
      sub.objectives?.forEach((obj) => {
        obj.initiatives?.forEach((init) => {
          total++;
          if (completedMap[init.id]?.completed) done++;
        });
      });
    });

    return { total, done };
  };

  const totalInitiatives = factors.reduce((acc, factor) => {
    factor.subitems.forEach((sub) => {
      sub.objectives?.forEach((obj) => {
        acc += obj.initiatives?.length || 0;
      });
    });
    return acc;
  }, 0);

  const completedCount = Object.values(completedMap).filter(
    (i) => i.completed,
  ).length;

  const missingCount = totalInitiatives - completedCount;

  const progress =
    totalInitiatives > 0
      ? Math.round((completedCount / totalInitiatives) * 100)
      : 0;

  return (
    <div
      className="
    relative
    min-h-screen
    overflow-hidden
    text-white
    bg-gradient-to-br
    from-[#0b152e]
    via-[#08183f]
    to-[#0c1a37]
  "
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* glow azul */}
        <div
          className="
      absolute
      top-[-200px]
      left-[-200px]
      w-[500px]
      h-[500px]
      rounded-full
      bg-cyan-500/10
      blur-3xl
    "
        />

        {/* glow roxo */}
        <div
          className="
      absolute
      bottom-[-200px]
      right-[-200px]
      w-[500px]
      h-[500px]
      rounded-full
      bg-violet-500/10
      blur-3xl
    "
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 md:px-8 xl:px-10">
        {/* HEADER */}
        <div className="mb-12 relative">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 xl:gap-10">
            {/* TITULOS */}
            <div>
              {/* TAG SUPERIOR */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.20em] text-cyan-200 font-semibold">
                  Mapa Estratégico Dashboard
                </span>
              </div>

              {/* LOGO + TITULO */}
              <div className="flex items-center gap-6 sm:gap-8">
                {/* LOGO */}
                <img
                  src={iconlogo}
                  alt="Logo"
                  className="
w-24 h-24
sm:w-32 sm:h-32
md:w-40 md:h-40
object-contain
drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]
flex-shrink-0
"
                />

                {/* TITULO */}
                <div>
                  <h1
                    className="
text-4xl
sm:text-5xl
md:text-6xl
xl:text-7xl
font-black
leading-none
tracking-tight
bg-clip-text
text-transparent
"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0c73ba, #34d399)",
                    }}
                  >
                    Painel
                    <br />
                    Administrativo
                  </h1>
                </div>
              </div>
            </div>

            {/* BOTÃO */}
            <div>
              <button
                onClick={handleLogout}
                className="
group
w-full sm:w-auto
px-5 py-3
rounded-2xl
bg-white/5
backdrop-blur-2xl
border border-white/10
text-slate-200
hover:bg-red-500/20
hover:border-red-400/40
hover:text-white
transition-all duration-300
shadow-2xl shadow-black/40
font-medium

flex items-center gap-3
"
              >
                <img
                  src={sairIcon}
                  alt="Sair"
                  className="
w-5 h-5
object-contain
opacity-80
group-hover:opacity-100
transition
"
                />

                <span>Sair </span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTAINER MINI PAINEL */}
        <div
          className="
relative
mb-14
p-4 sm:p-6 md:p-8
rounded-[32px]
border border-white/10
bg-white/[0.04]
backdrop-blur-2xl
shadow-[0_0_80px_rgba(0,0,0,0.45)]
overflow-hidden
"
        >
          {/* EFEITOS */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* TOPO */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Visão Geral
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                Indicadores estratégicos e progresso geral do painel.
              </p>
            </div>
          </div>

          {/* MINI PAINEL */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* TOTAL */}
            <div
              className="
relative overflow-hidden
p-6 rounded-3xl
bg-gradient-to-br from-cyan-500/20 to-blue-600/10
backdrop-blur-2xl
border border-cyan-400/20
shadow-2xl shadow-cyan-500/10
"
            >
              {/* ICON */}
              <div className="absolute top-4 right-4 opacity-20">
                <Target size={30} className="text-cyan-300" />
              </div>

              <div className="relative z-10">
                <p className="text-sm text-cyan-100/70 uppercase tracking-widest">
                  Total de iniciativas
                </p>

                <p className="text-5xl font-black mt-3 text-cyan-100">
                  {totalInitiatives}
                </p>
              </div>
            </div>

            {/* CONCLUÍDAS */}
            <div
              className="
relative overflow-hidden
p-6 rounded-3xl
bg-gradient-to-br from-emerald-500/20 to-green-600/10
backdrop-blur-2xl
border border-emerald-400/20
shadow-2xl shadow-emerald-500/10
"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <CheckCircle2 size={30} className="text-emerald-300" />
              </div>

              <div className="relative z-10">
                <p className="text-sm text-emerald-200 uppercase tracking-widest">
                  Com evidência
                </p>

                <p className="text-5xl font-black mt-3 text-emerald-100">
                  {completedCount}
                </p>
              </div>
            </div>

            {/* FALTANTES */}
            <div
              className="
relative overflow-hidden
p-6 rounded-3xl
bg-gradient-to-br from-amber-500/20 to-orange-600/10
backdrop-blur-2xl
border border-amber-400/20
shadow-2xl shadow-amber-500/10
"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Clock3 size={30} className="text-amber-300" />
              </div>

              <div className="relative z-10">
                <p className="text-xs md:text-sm text-amber-200 uppercase tracking-widest">
                  Faltantes
                </p>

                <p className="text-xl md:text-5xl font-black mt-3 text-amber-100">
                  {missingCount}
                </p>
              </div>
            </div>

            {/* PROGRESSO */}
            <div
              className="
relative overflow-hidden
p-6 rounded-3xl
bg-gradient-to-br from-violet-500/20 to-indigo-600/10
backdrop-blur-2xl
border border-violet-400/20
shadow-2xl shadow-violet-500/10
"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <TrendingUp size={30} className="text-violet-300" />
              </div>

              <div className="relative z-10">
                <p className="text-xs md:text-sm text-violet-200 uppercase tracking-widest">
                  Progresso
                </p>

                <p className="text-xl md:text-5xl font-black mt-3 text-violet-100">
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {factors.map((factor) => {
            const isOpen = openFactor === factor.id;
            const stats = getFactorStats(factor.id);
            return (
              <div
                key={factor.id}
                className="
group
rounded-3xl
overflow-hidden
transition-all duration-500
border border-white/10
bg-white/5
backdrop-blur-xl
shadow-2xl shadow-black/40
hover:border-cyan-400/30
hover:shadow-cyan-500/10
"
                style={{ borderColor: `${factor.color}30` }}
              >
                {/* FACTOR */}
                <button
                  onClick={() => setOpenFactor(isOpen ? null : factor.id)}
                  className="
w-full
flex items-center justify-between
p-6
transition-all duration-300
hover:bg-white/5
"
                  style={{ backgroundColor: `${factor.color}10` }}
                >
                  <div
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2 font-semibold text-sm md:text-base w-full"
                    style={{ color: factor.color }}
                  >
                    <span className="w-5 text-center">{factor.icon}</span>
                    <span className="truncate">{factor.label}</span>

                    <span
                      className="
text-xs
px-4 py-2
rounded-full
bg-black/30
border border-white/10
backdrop-blur-xl
whitespace-nowrap
font-semibold
"
                    >
                      {stats.done}/{stats.total}
                    </span>
                  </div>

                  {isOpen ? (
                    <ChevronDown size={18} style={{ color: factor.color }} />
                  ) : (
                    <ChevronRight size={18} style={{ color: factor.color }} />
                  )}
                </button>

                {/* SUBITEMS */}
                {isOpen && (
                  <div className="p-3 md:p-5 space-y-3 md:space-y-4 bg-white">
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
                                      className="w-full flex items-center justify-between text-sm font-medium py-3"
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
                                              className={`flex items-start gap-3 p-3 md:p-3 rounded-lg border transition cursor-pointer
${
  done
    ? "bg-emerald-500/10 border-emerald-400/20"
    : "bg-white/[0.03] border-white/10"
}`}
                                            >
                                              {/* CHECKBOX */}
                                              <div
                                                onClick={() =>
                                                  handleToggle(init.id, !done)
                                                }
                                                className="
w-6 h-6
mt-1
flex items-center justify-center
rounded-xl
border
flex-shrink-0
transition-all duration-300
shadow-lg
"
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
                                                  className="mt-2 w-full text-xs md:text-sm p-2 rounded-md border border-slate-200 
focus:outline-none focus:ring-2 focus:ring-slate-300
text-slate-700 bg-white"
                                                />
                                                {/* 🔗 LINK */}
                                                <input
                                                  type="text"
                                                  value={
                                                    completedMap[init.id]
                                                      ?.link || ""
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
                                                      completedMap[init.id]
                                                        ?.link,
                                                    )
                                                  }
                                                  className="mt-2 w-full text-xs md:text-sm p-2 rounded-md border border-slate-200 
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
      {/* FOOTER */}
      <footer
        className="
w-full
mt-20
border-t border-white/10
bg-gradient-to-b from-[#020617] to-black
relative
overflow-hidden
"
      >
        {/* EFEITOS */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        <div
          className="
relative z-10
max-w-7xl
mx-auto
px-4 sm:px-6 md:px-8 xl:px-10
py-10
"
        >
          {/* LINHA PRINCIPAL */}
          <div
            className="
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-8
"
          >
            {/* ESQUERDA */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#0c73ba] animate-pulse" />

                <h3
                  className="
text-2xl
font-black
bg-clip-text
text-transparent
"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0c73ba, #34d399)",
                  }}
                >
                  Mapa Estratégico Dashboard
                </h3>
              </div>

              <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                Plataforma administrativa para acompanhamento estratégico,
                iniciativas, evidências e progresso institucional.
              </p>
            </div>

            {/* DIREITA */}
            <div
              className="
grid
grid-cols-2
sm:grid-cols-3
gap-5
text-sm
"
            >
              <div>
                <p className="text-slate-500 uppercase tracking-widest text-xs mb-2">
                  Iniciativas
                </p>

                <h4 className="text-white font-bold text-2xl">
                  {totalInitiatives}
                </h4>
              </div>

              <div>
                <p className="text-slate-500 uppercase tracking-widest text-xs mb-2">
                  Concluídas
                </p>

                <h4 className="text-emerald-400 font-bold text-2xl">
                  {completedCount}
                </h4>
              </div>

              <div>
                <p className="text-slate-500 uppercase tracking-widest text-xs mb-2">
                  Progresso
                </p>

                <h4 className="text-cyan-400 font-bold text-2xl">
                  {progress}%
                </h4>
              </div>
            </div>
          </div>

          {/* LINHA INFERIOR */}
          <div
            className="
mt-10
pt-6
border-t border-white/10
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
"
          >
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2026 Mapa Estratégico Dashboard — Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-widest">
                Sistema Online
              </div>

              <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs uppercase tracking-widest">
                Admin
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
