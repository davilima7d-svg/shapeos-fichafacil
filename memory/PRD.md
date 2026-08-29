# shapeOS - ficha fácil · PRD

## Original Problem Statement
Modern, responsive, highly interactive front-end UI for a fitness web app called "shapeOS - ficha fácil". Tech: React + Tailwind + Lucide. Dark mode (#1A1A1A), Aqua Digital (#00D2D2), Solar Orange (#FF7043), Ice White (#F5F5F5). Three views toggled by state: Login, Aluno (Student) Dashboard - Workout of the Day (with B&W exercise GIF demos), and Personal (Admin) Dashboard with student list and "Duplicar Ficha" action.

## User Choices (Feb 2026)
- Frontend-only, mocked data (no backend)
- Real B&W exercise demonstration GIFs (grayscale filter applied)
- Populated with fictitious data (3 students + full Treino A with 6 exercises)

## Architecture
- React 19 + CRA (craco) + Tailwind 3 + Lucide Icons
- Single-page, `currentView` state in `App.js` (login | aluno | personal)
- Google Fonts: Unbounded (headings, distinctive geometric) + Sora (body/UI)
- All interactive elements have unique `data-testid` attributes

## Files
- `src/App.js` – view router (state-based)
- `src/components/Logo.jsx` – SVG dumbbell + power-button logo
- `src/components/views/LoginView.jsx` – glassmorphism auth card, role tabs
- `src/components/views/AlunoView.jsx` – workout of the day, exercise cards w/ B&W GIFs, sticky finish button
- `src/components/views/PersonalView.jsx` – stats + student list w/ clone action
- `src/data/mockData.js` – 3 students, Treino A (6 exercises), personal stats

## Implemented (2026-02-29)
- Login screen: role toggle (Personal / Aluno), email/password inputs, "Acessar Ficha" orange CTA with lock icon + TLS badge, ambient glow + grid
- Aluno dashboard: greeting, workout header, session progress bar, 6 exercise cards each with B&W looped GIF demo, sets/reps/carga/descanso metrics, per-exercise complete toggle, sticky "Finalizar Treino" button with completion state
- Personal dashboard: welcome header, 3 stat cards (Alunos Ativos, Fichas Criadas, Aderência), student search, student rows with avatar/plan/progress/streak + "Ver Ficha" and "Duplicar Ficha" actions with confirmation state
- Testing agent report: 100% frontend pass, 0 failures

## Backlog / Next Priorities
- P1: Wire backend (FastAPI + MongoDB) for real auth, students, workout persistence
- P1: Ficha builder screen — Personal creates/edits workouts
- P2: Cronômetro de descanso automático entre séries
- P2: Registro de carga/reps por série (log de treino)
- P2: Histórico e progressão (gráficos)
- P2: Compartilhamento de treino via link
