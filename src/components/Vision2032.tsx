import { Cpu, Leaf, Users, Globe, TrendingUp, Wifi } from "lucide-react";
import RoadmapInfographic from "./RoadmapInfographic";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Leaf,
    title: "Descarbonização",
    description:
      "Indústria neutra em carbono, liderando a transição energética global com energias renováveis e eficiência produtiva.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Cpu,
    title: "Digitalização",
    description:
      "IoT, IA, robótica e automação elevando a eficiência industrial e promovendo inovação de produtos em escala.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Wifi,
    title: "Infraestrutura Digital",
    description:
      "Expansão da conectividade reduzindo disparidades regionais e habilitando a Indústria 4.0 em todo o território.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: Users,
    title: "Força de Trabalho",
    description:
      "Políticas educacionais alinhadas às necessidades industriais, com desenvolvimento profissional contínuo e saúde dos trabalhadores.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description:
      "Setores promissores como energias renováveis, bioeconomia e economia circular garantindo crescimento de longo prazo.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
  {
    icon: Globe,
    title: "Inserção Global",
    description:
      "Participação ampliada nas cadeias globais de valor com acordos internacionais e promoção das exportações industriais.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Vision2032() {
  return (
    <section id="visao" className="bg-slate-900 py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6 mt-6">
            Horizonte Estratégico
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Indústria que Queremos
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #34d399, #60a5fa)",
              }}
            >
              em 2032
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Até 2032, a indústria no Brasil terá avançado significativamente
            graças a esforços conjuntos entre o governo e o setor privado,
            elevando sua participação no cenário global e garantindo crescimento
            econômico sustentável.
          </p>
        </motion.div>

        {/* ROADMAP */}
        <motion.div
          variants={item}
          className="w-full max-w-4xl mx-auto scale-90 origin-top"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >
            <RoadmapInfographic />
          </motion.div>
        </motion.div>

        {/* PILARES */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`${pillar.bg} ${pillar.border} border rounded-2xl p-6 transition-transform`}
            >
              <div className={`${pillar.color} mb-4`}>
                <pillar.icon size={28} />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {pillar.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={item}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Colaboração como Motor da Mudança
              </h3>

              <p className="text-slate-400 leading-relaxed mb-4">
                Para concretizar essa visão, uma ação coordenada entre setor
                público e setor privado é essencial, visando redução do Custo
                Brasil, reforma tributária e outras medidas que alinhem o país
                às melhores práticas internacionais.
              </p>

              <p className="text-slate-400 leading-relaxed">
                O Mapa Estratégico é um plano que orienta para essa nova fase
                industrial, sublinhando a importância da colaboração entre todos
                os envolvidos.
              </p>
            </motion.div>

            <motion.div variants={container} className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Setor Público",
                  desc: "Políticas, regulação e investimentos",
                  color: "border-blue-500/30 bg-blue-500/5",
                },
                {
                  label: "Setor Privado",
                  desc: "Inovação, investimento e execução",
                  color: "border-emerald-500/30 bg-emerald-500/5",
                },
                {
                  label: "Academia",
                  desc: "P&D e formação de talentos",
                  color: "border-amber-500/30 bg-amber-500/5",
                },
                {
                  label: "Sociedade",
                  desc: "Demanda, sustentabilidade e inclusão",
                  color: "border-rose-500/30 bg-rose-500/5",
                },
              ].map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className={`border ${itemData.color} rounded-xl p-4`}
                >
                  <div className="text-white font-semibold text-sm mb-1">
                    {itemData.label}
                  </div>
                  <div className="text-slate-400 text-xs">{itemData.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
