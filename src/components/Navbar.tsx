import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import logoFiepb from "../assets/logosistemas.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Visão 2032", href: "#visao" },
  { label: "Fatores-Chave", href: "#fatores" },
  { label: "Paraíba", href: "#paraiba" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative">
            <img
              src={logoFiepb}
              alt="FIEPB"
              className="h-20 w-auto object-contain"
            />
            <div className="absolute -inset-2 bg-emerald-500/10 blur-xl rounded-full -z-10" />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative px-4 py-2 text-sm font-medium text-slate-300
                hover:text-white transition-all duration-200
                rounded-lg hover:bg-white/5
              "
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] scale-x-0 bg-gradient-to-r from-emerald-400 to-blue-400 transition-transform duration-300 origin-left hover:scale-x-100" />
            </a>
          ))}

          <a
            href="https://projetoagendaestrategica-teste.netlify.app/"
            className="
              ml-2 px-5 py-2 rounded-xl text-sm font-semibold text-white
              bg-blue-600
              hover:from-emerald-400 hover:to-blue-400
              shadow-md hover:shadow-emerald-500/20
              transition-all duration-300
            "
          >
            Agenda Estratégica
          </a>
        </nav>

        {/* MOBILE */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${
            open
              ? "max-h-[400px] opacity-100 border-t border-white/5 bg-slate-900/95 backdrop-blur-xl"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-slate-300 hover:text-white
                px-3 py-2 rounded-lg hover:bg-white/5
                transition-all font-medium
              "
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://projetoagendaestrategica-teste.netlify.app/"
            className="
              mt-2 px-4 py-3 rounded-xl text-center font-semibold text-white
              bg-gradient-to-r from-emerald-500 to-blue-500
            "
          >
            Agenda Estratégica
          </a>
        </div>
      </div>
    </header>
  );
}
