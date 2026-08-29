import React, { useState } from "react";
import { Lock, Mail, KeyRound, ShieldCheck, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export const LoginView = ({ onEnter }) => {
  const [role, setRole] = useState("aluno"); // "personal" | "aluno"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnter(role);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12"
      data-testid="login-view"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #00D2D2 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #FF7043 0%, transparent 70%)" }}
      />
      {/* Grid noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center mb-10">
          <Logo size="lg" />
        </div>

        <div
          className="rounded-3xl p-8 backdrop-blur-xl"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div className="mb-6">
            <h1
              className="text-3xl text-[#F5F5F5] tracking-tight"
              style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 600 }}
            >
              Acesse sua ficha
            </h1>
            <p className="text-sm text-zinc-500 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Entre para treinar ou gerenciar sua base.
            </p>
          </div>

          {/* Role tabs */}
          <div
            className="grid grid-cols-2 gap-1 p-1 rounded-2xl mb-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            data-testid="role-tabs"
          >
            <button
              type="button"
              data-testid="role-tab-personal"
              onClick={() => setRole("personal")}
              className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                role === "personal"
                  ? "text-[#1A1A1A] shadow-lg"
                  : "text-zinc-400 hover:text-[#F5F5F5]"
              }`}
              style={{
                fontFamily: "'Sora', sans-serif",
                background: role === "personal" ? "#00D2D2" : "transparent",
                boxShadow: role === "personal" ? "0 6px 20px rgba(0,210,210,0.35)" : "none",
              }}
            >
              Personal (ADM)
            </button>
            <button
              type="button"
              data-testid="role-tab-aluno"
              onClick={() => setRole("aluno")}
              className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                role === "aluno"
                  ? "text-[#1A1A1A] shadow-lg"
                  : "text-zinc-400 hover:text-[#F5F5F5]"
              }`}
              style={{
                fontFamily: "'Sora', sans-serif",
                background: role === "aluno" ? "#00D2D2" : "transparent",
                boxShadow: role === "aluno" ? "0 6px 20px rgba(0,210,210,0.35)" : "none",
              }}
            >
              Aluno
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-widest">Email</label>
              <div className="mt-2 relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  data-testid="login-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@shapeos.app"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-[#F5F5F5] placeholder:text-zinc-600 outline-none transition-all focus:border-[#00D2D2]/60 focus:ring-2 focus:ring-[#00D2D2]/20"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-widest">Senha</label>
              <div className="mt-2 relative">
                <KeyRound className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  data-testid="login-password-input"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-[#F5F5F5] placeholder:text-zinc-600 outline-none transition-all focus:border-[#00D2D2]/60 focus:ring-2 focus:ring-[#00D2D2]/20"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="login-submit-button"
              className="group w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-[#1A1A1A] font-semibold text-base transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: "#FF7043",
                boxShadow: "0 12px 28px rgba(255,112,67,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
                fontFamily: "'Sora', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              <Lock className="w-4 h-4" />
              Acessar Ficha
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2D2]" />
              Conexão criptografada · TLS 1.3
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-zinc-600 mt-6" style={{ fontFamily: "'Sora', sans-serif" }}>
          Novo por aqui? <span className="text-[#00D2D2] cursor-pointer hover:underline">Solicite acesso</span>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
