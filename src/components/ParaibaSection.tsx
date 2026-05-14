import { paraibaSummary } from "../data/strategicMap";
import { MapPin, Lightbulb, Target, Users, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Stack from "./ui/stack";

const factorColors: Record<string, string> = {
  "Ambiente de Negócios": "#0e7490",
  "Ambiente Econômico": "#065f46",
  "Baixo Carbono e Recursos Naturais": "#166534",
  "Comércio e Integração Internacional": "#1e3a5f",
  "Desenvolvimento Humano e Trabalho": "#7c3aed",
  "Desenvolvimento Produtivo, Tecnologia e Inovação": "#4338ca",
  Educação: "#9a3412",
  Infraestrutura: "#92400e",
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

export default function ParaibaSection() {
  const max = Math.max(...paraibaSummary.breakdown.map((b) => b.initiatives));

  return (
    <section id="paraiba" className="bg-slate-900 py-24 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className="max-w-7xl mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 text-amber-400 text-sm font-medium mb-6 mt-6">
            <MapPin size={14} />
            Regionalização do Mapa
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mapa Estratégico da
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #fbbf24, #f97316)",
              }}
            >
              Indústria da Paraíba
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A Paraíba desbrava novos caminhos para o desenvolvimento econômico
            com a regionalização do Mapa Estratégico da Indústria, estabelecendo
            um modelo de atuação estratégica em parceria com a CNI.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div variants={container} className="grid lg:grid-cols-3 gap-8">
          {/* COLUNA ESQUERDA */}
          <motion.div variants={item} className="flex flex-col gap-6 h-full">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">
                {paraibaSummary.totalInitiatives}
              </div>
              <div className="text-white font-semibold mb-1">
                Iniciativas Totais
              </div>
              <div className="text-slate-400 text-sm">
                focadas em impulsionar a competitividade local
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-6">
                Como foi construído
              </h3>

              <div className="h-[340px]">
                <Stack
                  randomRotation={false}
                  autoplay
                  autoplayDelay={3000}
                  sensitivity={120}
                  sendToBackOnClick
                  cards={[
                    {
                      icon: Workflow,
                      title: "04 - Alinhamento Estratégico",
                      text: "Identificação de ações da FIEMA alinhadas às metas estratégicas",
                    },
                    {
                      icon: Users,
                      title: "03 - Lideranças Locais",
                      text: "Esse esforço colaborativo incluiu entrevistas com lideranças locais.",
                    },
                    {
                      icon: Target,
                      title: "02 - Temas Estratégicos",
                      text: "Temas como ambiente econômico, baixo carbono e educação.",
                    },
                    {
                      icon: Lightbulb,
                      title: "01 - Oficinas Técnicas",
                      text: "Oficinas técnicas nos temas relacionados aos fatores-chave do Mapa Estratégico.",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="
            h-full
            w-full
            rounded-3xl
            border
            border-slate-700/50
            bg-gradient-to-br
            from-slate-800
            to-slate-900
            p-6
            shadow-2xl
            relative
            overflow-hidden
          "
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-4">
                            {(() => {
                              const Icon = card.icon;
                              return <Icon size={16} />;
                            })()}
                            <span>Etapa estratégica</span>
                          </div>

                          <h4 className="text-white text-xl font-bold mb-4">
                            {card.title}
                          </h4>

                          <p className="text-slate-400 text-sm leading-relaxed">
                            {card.text}
                          </p>
                        </div>

                        <div className="absolute right-6 bottom-6 opacity-10">
                          <card.icon size={120} />
                        </div>
                      </div>
                    </div>
                  ))}
                />
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />

                <span>
                  Clique nos cards ou arraste com o mouse para explorar as
                  etapas
                </span>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA */}
          <motion.div
            variants={item}
            className="lg:col-span-2 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8"
          >
            <h3 className="text-white font-semibold mb-8 text-lg">
              Distribuição de Iniciativas por Fator-Chave
            </h3>

            <div className="space-y-5">
              {[...paraibaSummary.breakdown]
                .sort((a, b) => b.initiatives - a.initiatives)
                .map((itemData) => {
                  const pct = (itemData.initiatives / max) * 100;
                  const color = factorColors[itemData.factor] ?? "#3b82f6";

                  return (
                    <motion.div key={itemData.factor} variants={item}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-slate-300 text-sm font-medium leading-tight max-w-xs">
                          {itemData.factor}
                        </span>

                        <span className="text-white font-bold text-sm ml-4 shrink-0">
                          {itemData.initiatives}
                        </span>
                      </div>

                      <div className="h-2.5 bg-slate-700/60 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        </motion.div>

        {/* BLOCO FINAL */}
        <motion.div
          variants={item}
          className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-10 text-center"
        >
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            O comprometimento conjunto da FIEPB com a CNI resultou em{" "}
            <span className="text-amber-400 font-bold">
              {paraibaSummary.totalInitiatives} iniciativas
            </span>{" "}
            distribuídas pelos 8 fatores-chave, estabelecendo um modelo
            replicável de estratégia industrial regional para todo o Brasil.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
