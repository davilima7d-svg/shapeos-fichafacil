import React, { useState } from "react";
import {
  Flame,
  Clock,
  Dumbbell,
  Repeat,
  Weight,
  Timer,
  CheckCircle2,
  Circle,
  ChevronRight,
  LogOut,
  Trophy,
  Play,
} from "lucide-react";
import Logo from "@/components/Logo";
import { workoutOfTheDay } from "@/data/mockData";

const StatChip = ({ icon: Icon, label, value, accent }) => (
  <div
    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    <Icon className="w-3.5 h-3.5" style={{ color: accent || "#00D2D2" }} />
    <span className="text-xs text-zinc-500">{label}</span>
    <span className="text-xs text-[#F5F5F5] font-medium">{value}</span>
  </div>
);

const ExerciseCard = ({ exercise, done, onToggle }) => {
  return (
    <div
      data-testid={`exercise-card-${exercise.id}`}
      className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
        done ? "opacity-70" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
        border: `1px solid ${done ? "rgba(0,210,210,0.35)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: done
          ? "0 0 0 1px rgba(0,210,210,0.15), 0 12px 30px rgba(0,0,0,0.35)"
          : "0 12px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* GIF demo */}
        <div className="relative md:w-56 h-48 md:h-auto flex-shrink-0 bg-black overflow-hidden">
          <img
            src={exercise.gif}
            alt={exercise.name}
            className="w-full h-full object-cover"
            style={{
              filter: "grayscale(100%) contrast(1.15) brightness(0.95)",
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/70 backdrop-blur">
            <Play className="w-3 h-3 text-[#00D2D2]" fill="#00D2D2" />
            <span className="text-[10px] uppercase tracking-widest text-[#F5F5F5]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Demo
            </span>
          </div>
          <div className="absolute bottom-3 left-3 text-[10px] text-zinc-400 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>
            {exercise.equipment}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 p-5 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs w-6 h-6 rounded-md flex items-center justify-center"
                  style={{
                    background: "rgba(0,210,210,0.1)",
                    color: "#00D2D2",
                    border: "1px solid rgba(0,210,210,0.25)",
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {String(exercise.order).padStart(2, "0")}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {exercise.muscle}
                </span>
              </div>
              <button
                data-testid={`exercise-toggle-${exercise.id}`}
                onClick={() => onToggle(exercise.id)}
                className="transition-transform hover:scale-110"
                aria-label="Concluir exercício"
              >
                {done ? (
                  <CheckCircle2 className="w-6 h-6 text-[#00D2D2]" />
                ) : (
                  <Circle className="w-6 h-6 text-zinc-600" />
                )}
              </button>
            </div>

            <h3
              className="text-xl text-[#F5F5F5] mt-2 leading-tight"
              style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              {exercise.name}
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-2" style={{ fontFamily: "'Sora', sans-serif" }}>
            <div
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500">
                <Repeat className="w-3 h-3" /> Séries
              </div>
              <div className="text-lg text-[#F5F5F5] font-semibold mt-1">{exercise.sets}</div>
            </div>
            <div
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500">
                <Dumbbell className="w-3 h-3" /> Reps
              </div>
              <div className="text-lg text-[#F5F5F5] font-semibold mt-1">{exercise.reps}</div>
            </div>
            <div
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,112,67,0.15)" }}
            >
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500">
                <Weight className="w-3 h-3" /> Carga
              </div>
              <div className="text-lg text-[#FF7043] font-semibold mt-1">{exercise.weight}</div>
            </div>
            <div
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500">
                <Timer className="w-3 h-3" /> Descanso
              </div>
              <div className="text-lg text-[#F5F5F5] font-semibold mt-1">{exercise.rest}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlunoView = ({ onLogout }) => {
  const [completed, setCompleted] = useState(new Set());
  const [finished, setFinished] = useState(false);

  const toggle = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const total = workoutOfTheDay.exercises.length;
  const doneCount = completed.size;
  const progress = Math.round((doneCount / total) * 100);

  const handleFinish = () => {
    setFinished(true);
    setTimeout(() => setFinished(false), 3500);
  };

  return (
    <div className="min-h-screen pb-32" data-testid="aluno-view">
      {/* Top bar */}
      <div
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          background: "rgba(26,26,26,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <Logo size="sm" />
          <button
            data-testid="aluno-logout-button"
            onClick={onLogout}
            className="text-xs text-zinc-500 hover:text-[#F5F5F5] flex items-center gap-1.5 transition-colors"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <LogOut className="w-3.5 h-3.5" /> Sair
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 pt-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-[0.3em]" style={{ fontFamily: "'Sora', sans-serif" }}>
            <Flame className="w-3.5 h-3.5 text-[#FF7043]" />
            Treino de hoje
          </div>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-[0.95]"
                style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 600, letterSpacing: "-0.03em" }}
              >
                Olá, <span className="text-[#00D2D2]">Rafael</span>
              </h1>
              <p
                className="mt-3 text-base md:text-lg text-zinc-400"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {workoutOfTheDay.code} · {workoutOfTheDay.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <StatChip icon={Clock} label="Duração" value={workoutOfTheDay.duration} />
              <StatChip icon={Trophy} label="Streak" value="14 dias" accent="#FF7043" />
              <StatChip icon={Dumbbell} label="Foco" value={workoutOfTheDay.focus} />
            </div>
          </div>

          {/* Progress */}
          <div
            className="mt-6 rounded-2xl p-5"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center justify-between mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Progresso da sessão</span>
              <span className="text-sm text-[#F5F5F5] font-semibold">
                {doneCount}/{total} <span className="text-zinc-500 font-normal">exercícios · {progress}%</span>
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                data-testid="session-progress-bar"
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #00D2D2, #FF7043)",
                  boxShadow: "0 0 12px rgba(0,210,210,0.5)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-4" data-testid="exercise-list">
          {workoutOfTheDay.exercises.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              done={completed.has(ex.id)}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>

      {/* Sticky finish button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-5 pt-8 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26,26,26,0.98) 55%, rgba(26,26,26,0))",
        }}
      >
        <div className="max-w-3xl mx-auto pointer-events-auto">
          <button
            data-testid="finish-workout-button"
            onClick={handleFinish}
            className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-[#1A1A1A] font-semibold transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            style={{
              background: finished
                ? "#00D2D2"
                : "#FF7043",
              boxShadow: finished
                ? "0 14px 32px rgba(0,210,210,0.4)"
                : "0 14px 32px rgba(255,112,67,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {finished ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Treino finalizado! Bom trabalho.
              </>
            ) : (
              <>
                <Flame className="w-5 h-5" />
                Finalizar Treino
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlunoView;
