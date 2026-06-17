import { useState } from "react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, User, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
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
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Blur Background */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-0 right-0" />

      <form
        onSubmit={handleLogin}
        className="
          relative
          w-full
          max-w-md
          p-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4">
            <ShieldCheck className="text-cyan-400" size={28} />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Painel Administrativo
          </h1>

          <p className="text-slate-400 text-sm mt-2 text-center">
            Acesso restrito ao gerenciamento das iniciativas estratégicas
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
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
                py-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-cyan-500
              "
            />
          </div>

          <div className="relative">
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
                py-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-cyan-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              font-semibold
              text-white
              bg-cyan-600
              hover:bg-cyan-500
              transition-all
              shadow-lg
              shadow-cyan-500/20
            "
          >
            Entrar no Painel
          </button>
        </div>
      </form>
    </div>
  );
}
