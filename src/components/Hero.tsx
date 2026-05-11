import { ArrowDown, BarChart2, Target, Lightbulb, Zap } from "lucide-react";
import { mapStats } from "../data/strategicMap";
import { motion } from "framer-motion";
import logoCNI from "../assets/cnilogo.png";

const stats = [
  {
    label: "Fatores-Chave",
    value: mapStats.factors,
    icon: Target,
    color: "text-blue-400",
  },
  {
    label: "Temas Prioritários",
    value: mapStats.priorityThemes,
    icon: Lightbulb,
    color: "text-emerald-400",
  },
  {
    label: "Objetivos",
    value: mapStats.objectives,
    icon: BarChart2,
    color: "text-amber-400",
  },
  {
    label: "Iniciativas",
    value: mapStats.initiatives,
    icon: Zap,
    color: "text-cyan-400",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0c1a2e 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-300/80 border border-blue-500/90 rounded-full px-4 py-2 text-blue-900 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse" />
            <img
              src={logoCNI}
              alt="CNI"
              className="w-8 md:w-14 lg:w-14 h-auto object-contain drop-shadow-md"
            />{" "}
            Confederação Nacional da Indústria
          </div>
        </motion.div>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight"
        >
          Mapa Estratégico
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa, #34d399)",
            }}
          >
            da Indústria da Paraíba
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-slate-300 font-light mb-4"
        >
          2025 — 2032
        </motion.p>

        <motion.p
          variants={item}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          O caminho para a Nova Indústria brasileira — uma visão estratégica de
          longo prazo com 8 fatores-chave, 32 temas prioritários e 342
          iniciativas transformadoras.
        </motion.p>

        {/* stats */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-colors"
            >
              <stat.icon size={22} className={`${stat.color} mb-2`} />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#fatores"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Explorar os Fatores-Chave
          </a>
          <a
            href="https://drive.google.com/file/d/1VxegDw39GltsUIPOK2-3huU_kkUOOxvM/view?usp=drive_link"
            className="text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors text-base"
          >
            Diagramação
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#visao"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
