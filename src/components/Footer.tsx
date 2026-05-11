import logoAzul from "../assets/logoazul.png";
import logoCni from "../assets/logocni.png";
import logoFiepb from "../assets/logofiepb.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <img
                src={logoAzul}
                alt="SENAI"
                className="h-24 w-auto max-w-[150px] object-contain transition"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Uma visão de longo prazo para o desenvolvimento e o crescimento da
              indústria brasileira na próxima década.
            </p>
          </div>

          {/* PERIODOS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Períodos</h4>
            <div className="space-y-2 text-slate-500 text-sm">
              <div>2025 — Lançamento do Mapa</div>
              <div>2026 — Revisão de Indicadores</div>
              <div>2028 — Avaliação Intermediária</div>
              <div>2030 — Revisão Estratégica</div>
              <div>2032 — Metas Finais</div>
            </div>
          </div>

          {/* ORGANIZAÇÕES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Organizações</h4>

            <div className="flex items-center gap-6 flex-wrap">
              <img
                src={logoCni}
                alt="CNI"
                className="h-18 w-auto max-w-[150px] object-contain  transition"
              />

              <img
                src={logoFiepb}
                alt="FIEPB"
                className="h-16 w-auto max-w-[150px] object-contain  transition"
              />
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Mapa Estratégico da Indústria 2025–2032. CNI /
            FIEPB.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-600 text-sm">
              Visão 2032 em andamento
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
