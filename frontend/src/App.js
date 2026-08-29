import { useState } from "react";
import "@/App.css";
import LoginView from "@/components/views/LoginView";
import AlunoView from "@/components/views/AlunoView";
import PersonalView from "@/components/views/PersonalView";
import { workoutsById as initialWorkouts } from "@/data/mockData";

function App() {
  const [currentView, setCurrentView] = useState("login");
  // Shared workouts state — Personal edits propagate to Aluno
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const handleEnter = (role) => {
    setCurrentView(role === "personal" ? "personal" : "aluno");
  };

  const handleLogout = () => {
    setCurrentView("login");
  };

  const handleUpdateWorkout = (templateId, updated) => {
    setWorkouts((prev) => ({ ...prev, [templateId]: updated }));
  };

  return (
    <div
      className="App min-h-screen text-[#F5F5F5]"
      style={{
        background: "#1A1A1A",
        fontFamily: "'Sora', sans-serif",
      }}
      data-testid="app-root"
    >
      {currentView === "login" && <LoginView onEnter={handleEnter} />}
      {currentView === "aluno" && (
        <AlunoView onLogout={handleLogout} workouts={workouts} />
      )}
      {currentView === "personal" && (
        <PersonalView
          onLogout={handleLogout}
          workouts={workouts}
          onUpdateWorkout={handleUpdateWorkout}
        />
      )}
    </div>
  );
}

export default App;
