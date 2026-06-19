import { useState } from "react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, User, ShieldCheck } from "lucide-react";
import SplashCursor from "../components/ui/SplashCursor";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    navigate("/admin");
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        bg-slate-950
        text-white
        px-4
      "
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0c1a2e 100%)",
      }}
    >
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#38bdf8"
      />
      {/* GRID igual HERO */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* GLOW CENTRAL (igual hero) */}
      <div className="absolute flex items-center justify-center inset-0 pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ORBS */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl -top-32 -left-32" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl bottom-0 right-0" />

      {/* CARD */}
      <form
        onSubmit={handleLogin}
        className="
          relative
          w-full
          max-w-md
          p-6 md:p-8
          rounded-3xl
          border border-white/10
          bg-slate-900/40
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(59,130,246,0.15)]
        "
      >
        {/* HEADER */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div
            className="
              w-14 h-14 md:w-16 md:h-16
              rounded-2xl
              bg-blue-500/10
              border border-blue-400/20
              flex items-center justify-center
              mb-4
            "
          >
            <ShieldCheck className="text-blue-400" size={28} />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold">
            Painel Administrativo
          </h1>

          <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-xs">
            Acesso restrito ao gerenciamento das iniciativas estratégicas
          </p>
        </div>

        {/* INPUT USER */}
        <div className="relative mb-4">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              w-full
              pl-10
              pr-4
              py-3 md:py-3.5
              rounded-xl
              bg-white/5
              border border-white/10
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-blue-400
              focus:ring-2 focus:ring-blue-500/20
              transition
            "
          />
        </div>

        {/* INPUT PASSWORD */}
        <div className="relative mb-6">
          <LockKeyhole
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              pl-10
              pr-4
              py-3 md:py-3.5
              rounded-xl
              bg-white/5
              border border-white/10
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-blue-400
              focus:ring-2 focus:ring-blue-500/20
              transition
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full
            py-3.5
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r from-blue-600 to-cyan-500
            hover:from-blue-500 hover:to-cyan-400
            shadow-lg shadow-blue-500/20
            transition-all
            active:scale-[0.98]
          "
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
