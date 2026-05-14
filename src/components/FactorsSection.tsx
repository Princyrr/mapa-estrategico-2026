import { useState } from "react";
import { motion } from "framer-motion";
import Mandala from "./Mandala";
import FactorDetail from "./FactorDetail";
import { factors } from "../data/strategicMap";
import type { Factor, SubItem } from "../data/strategicMap";

export default function FactorsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const displayId = selectedId || hoveredId;

  function findData(id: string | null): {
    factor: Factor | null;
    subitem: SubItem | null;
  } {
    if (!id) return { factor: null, subitem: null };

    for (const factor of factors) {
      if (factor.id === id) {
        return { factor, subitem: null };
      }

      const sub = factor.subitems.find((s) => s.id === id);
      if (sub) {
        return { factor, subitem: sub };
      }
    }

    return { factor: null, subitem: null };
  }

  const { factor, subitem } = findData(displayId);

  const handleClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="fatores" className="bg-slate-900  py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.15,
        }}
      >
        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6 mt-6">
            Estrutura Estratégica
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            8 Fatores-Chave para a
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #60a5fa, #34d399)",
              }}
            >
              Competitividade Industrial
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Clique em um setor para explorar os temas prioritários.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* MANDALA */}
          <motion.div
            variants={item}
            className="rounded-3xl p-8 flex flex-col items-center justify-center"
          >
            <Mandala
              activeId={displayId}
              onHover={setHoveredId}
              onClick={handleClick}
            />

            <p className="text-slate-600 text-xs mt-4 text-center">
              Passe o mouse ou clique nos setores para explorar
            </p>
          </motion.div>

          {/* DETAIL PANEL */}
          <motion.div
            variants={item}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl min-h-[500px] flex flex-col"
          >
            <div className="border-b border-slate-800 px-6 py-4">
              <h3 className="text-slate-400 text-sm font-medium">
                {subitem
                  ? "Subtema Selecionado"
                  : factor
                    ? "Fator Selecionado"
                    : "Detalhes do Fator"}
              </h3>
            </div>

            <div className="flex-1 overflow-hidden">
              <FactorDetail factor={factor} subitem={subitem} />
            </div>
          </motion.div>
        </motion.div>

        {/* CHIPS */}
        <motion.div
          variants={container}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {factors.map((factorItem) => {
            const isActive = selectedId === factorItem.id;

            return (
              <button
                key={factorItem.id}
                onClick={() => handleClick(factorItem.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "text-white border-transparent"
                    : "text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: factorItem.color,
                        borderColor: factorItem.color,
                      }
                    : undefined
                }
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: isActive ? "white" : factorItem.color,
                  }}
                />

                {factorItem.label}
              </button>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
