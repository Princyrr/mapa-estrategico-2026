import logoAzul from "../assets/logoazul.png";
import logoCni from "../assets/logocni.png";
import logoFiepb from "../assets/logofiepb.png";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          {/* BRAND */}
          <div className="max-w-md">
            <img
              src={logoAzul}
              alt="Mapa Estratégico"
              className="h-16 w-auto object-contain mb-6"
            />

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Uma visão estratégica para impulsionar a competitividade, inovação
              e desenvolvimento sustentável da indústria brasileira até 2032.
            </p>

            <div className="flex items-center gap-2 mt-6 text-cyan-500 text-sm font-medium">
              <Sparkles size={16} />
              Estratégia • Inovação • Desenvolvimento
            </div>
          </div>

          {/* ORGANIZAÇÕES */}
          <div className="md:ml-auto">
            <h4 className="text-white font-semibold text-lg mb-6">
              Realização
            </h4>

            <div className="flex items-center gap-8 flex-wrap">
              <div className="group">
                <img
                  src={logoCni}
                  alt="CNI"
                  className="
                    h-16
                    w-auto
                    object-contain
                    opacity-80
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="group">
                <img
                  src={logoFiepb}
                  alt="FIEPB"
                  className="
                    h-20
                    w-auto
                    object-contain
                    opacity-80
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-slate-500 text-sm">
              <ArrowUpRight size={14} />
              Construindo o futuro da indústria brasileira
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Mapa Estratégico da Indústria 2025–2032
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-slate-500 text-sm">
              Visão estratégica em andamento
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
