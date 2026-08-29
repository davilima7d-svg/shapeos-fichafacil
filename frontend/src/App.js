import { useState } from "react";
import "@/App.css";
import LoginView from "@/components/views/LoginView";
import AlunoView from "@/components/views/AlunoView";
import PersonalView from "@/components/views/PersonalView";

function App() {
  const [currentView, setCurrentView] = useState("login");

  const handleEnter = (role) => {
    setCurrentView(role === "personal" ? "personal" : "aluno");
  };

  const handleLogout = () => {
    setCurrentView("login");
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
      {currentView === "aluno" && <AlunoView onLogout={handleLogout} />}
      {currentView === "personal" && <PersonalView onLogout={handleLogout} />}
    </div>
  );
}

export default App;
