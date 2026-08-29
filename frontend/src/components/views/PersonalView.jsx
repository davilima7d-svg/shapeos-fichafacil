import React, { useState } from "react";
import {
  Users,
  ClipboardList,
  TrendingUp,
  Copy,
  Eye,
  Plus,
  Search,
  LogOut,
  Flame,
  CheckCheck,
} from "lucide-react";
import Logo from "@/components/Logo";
import { students as initialStudents, personalStats } from "@/data/mockData";

const StatCard = ({ icon: Icon, label, value, unit, accent, testId }) => (
  <div
    data-testid={testId}
    className="relative rounded-2xl p-5 overflow-hidden transition-transform hover:-translate-y-0.5"
    style={{
      background: "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
      border: "1px solid rgba(255,255,255,0.07)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
    }}
  >
    <div
      className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-25 blur-2xl"
      style={{ background: accent }}
    />
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>
          <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
          {label}
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span
          className="text-4xl text-[#F5F5F5]"
          style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "-0.03em" }}
        >
          {value}
        </span>
        {unit && (
          <span className="text-sm text-zinc-500" style={{ fontFamily: "'Sora', sans-serif" }}>
            {unit}
          </span>
        )}
      </div>
    </div>
  </div>
);

const StudentRow = ({ student, onClone, cloned }) => {
  return (
    <div
      data-testid={`student-row-${student.id}`}
      className="group rounded-2xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012))",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,210,210,0.15), rgba(0,210,210,0.03))",
              border: "1px solid rgba(0,210,210,0.3)",
              color: "#00D2D2",
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 600,
            }}
          >
            {student.initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className="text-[#F5F5F5] truncate"
                style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 500, fontSize: "1.05rem", letterSpacing: "-0.01em" }}
              >
                {student.name}
              </h3>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest ${
                  student.status === "ativo" ? "text-[#00D2D2]" : "text-zinc-500"
                }`}
                style={{
                  background:
                    student.status === "ativo"
                      ? "rgba(0,210,210,0.1)"
                      : "rgba(255,255,255,0.05)",
                  border: `1px solid ${
                    student.status === "ativo"
                      ? "rgba(0,210,210,0.3)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                {student.status}
              </span>
            </div>
            <div className="text-xs text-zinc-500 mt-1 flex items-center gap-3 flex-wrap" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span>{student.age} anos</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>{student.plan}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="text-[#F5F5F5]">{student.currentWorkout}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>{student.lastSeen}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="hidden md:block w-40 flex-shrink-0">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
            Aderência
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${student.progress}%`,
                background: student.progress > 70 ? "#00D2D2" : "#FF7043",
              }}
            />
          </div>
          <div className="text-xs text-[#F5F5F5] mt-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>
            {student.progress}% <span className="text-zinc-500">· {student.streak}d streak</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            data-testid={`view-ficha-btn-${student.id}`}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm text-[#F5F5F5] transition-all hover:bg-white/5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            <Eye className="w-3.5 h-3.5" /> Ver Ficha
          </button>
          <button
            data-testid={`clone-ficha-btn-${student.id}`}
            onClick={() => onClone(student.id)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
            style={{
              background: cloned ? "#00D2D2" : "rgba(0,210,210,0.1)",
              color: cloned ? "#1A1A1A" : "#00D2D2",
              border: `1px solid ${cloned ? "#00D2D2" : "rgba(0,210,210,0.3)"}`,
              boxShadow: cloned ? "0 6px 18px rgba(0,210,210,0.35)" : "none",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {cloned ? (
              <>
                <CheckCheck className="w-3.5 h-3.5" /> Duplicada
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Duplicar Ficha
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export const PersonalView = ({ onLogout }) => {
  const [students] = useState(initialStudents);
  const [query, setQuery] = useState("");
  const [clonedId, setClonedId] = useState(null);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleClone = (id) => {
    setClonedId(id);
    setTimeout(() => setClonedId(null), 2000);
  };

  return (
    <div className="min-h-screen" data-testid="personal-view">
      {/* Top bar */}
      <div
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          background: "rgba(26,26,26,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Logo size="sm" />
          <button
            data-testid="personal-logout-button"
            onClick={onLogout}
            className="text-xs text-zinc-500 hover:text-[#F5F5F5] flex items-center gap-1.5 transition-colors"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <LogOut className="w-3.5 h-3.5" /> Sair
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-10 pb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-[0.3em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              <Flame className="w-3.5 h-3.5 text-[#FF7043]" />
              Painel do Personal
            </div>
            <h1
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-[0.95]"
              style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "-0.03em" }}
            >
              Bem-vindo, <span className="text-[#00D2D2]">Personal</span>
            </h1>
            <p
              className="mt-3 text-base md:text-lg text-zinc-400"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Gerencie fichas, acompanhe evolução e clone treinos em segundos.
            </p>
          </div>

          <button
            data-testid="new-student-button"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all hover:scale-[1.02] self-start md:self-auto"
            style={{
              background: "#FF7043",
              color: "#1A1A1A",
              boxShadow: "0 12px 28px rgba(255,112,67,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            <Plus className="w-4 h-4" /> Novo Aluno
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard
            testId="stat-active-students"
            icon={Users}
            label="Alunos Ativos"
            value={personalStats.activeStudents}
            accent="#00D2D2"
          />
          <StatCard
            testId="stat-workouts"
            icon={ClipboardList}
            label="Fichas Criadas"
            value={personalStats.workoutsCreated}
            accent="#FF7043"
          />
          <StatCard
            testId="stat-adherence"
            icon={TrendingUp}
            label="Aderência semanal"
            value={personalStats.weeklyAdherence}
            unit="%"
            accent="#00D2D2"
          />
        </div>

        {/* Search + list header */}
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-lg text-[#F5F5F5]"
            style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 500 }}
          >
            Sua base <span className="text-zinc-500">({filtered.length})</span>
          </h2>
          <div className="relative w-full max-w-xs">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              data-testid="student-search-input"
              type="text"
              placeholder="Buscar aluno..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-[#F5F5F5] placeholder:text-zinc-600 outline-none focus:border-[#00D2D2]/60 focus:ring-2 focus:ring-[#00D2D2]/20"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'Sora', sans-serif",
              }}
            />
          </div>
        </div>

        {/* Student list */}
        <div className="space-y-3" data-testid="student-list">
          {filtered.map((s) => (
            <StudentRow
              key={s.id}
              student={s}
              cloned={clonedId === s.id}
              onClone={handleClone}
            />
          ))}
          {filtered.length === 0 && (
            <div
              className="text-center py-10 rounded-2xl text-zinc-500 text-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px dashed rgba(255,255,255,0.08)",
                fontFamily: "'Sora', sans-serif",
              }}
            >
              Nenhum aluno encontrado com &quot;{query}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalView;
