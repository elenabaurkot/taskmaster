# TaskMaster — Claude Code Instructions
This file defines how Claude Code should work on the TaskMaster project. It applies to all contributors and agents working in this codebase.

---

## What This Project Is
TaskMaster is a desktop app (Electron + React + TypeScript) that centralizes the AI-assisted development workflow for engineers using Claude Code. It covers task creation, agent dispatch, worktree management, PR review, and code review responses in a single interface.

---

## Core Philosophy
**Simple and clear over clever and complex.**
- Write the minimum code needed to solve the problem
- Avoid premature abstraction — do not create layers, utilities, or abstractions unless they are needed right now
- If two approaches exist and one is simpler, choose the simpler one unless there is a specific reason not to
- Code should be readable by a junior engineer without explanation

---

## Tech Stack
- **Electron** — desktop app shell
- **React** — UI (renderer process)
- **TypeScript** — across all code, main and renderer
- **Node** — main process
- **SQLite** (via `better-sqlite3`) — local database
- **GitHub API** (via Octokit) — PR and code review integration
- **Jira REST API** (via `jira.js`) — task and issue integration
- **GitHub Actions** — CI/CD

---

## Code Standards

### TypeScript
- Never use `any` — find the correct type or use `unknown` with a type guard
- Prefer `interface` over `type` for object shapes
- All functions must have explicit return types
- Use strict mode — `tsconfig.json` should have `"strict": true`

### General
- Functions should do one thing and be small
- Variable and function names should be meaningful — no `data`, `res`, `temp`, `thing`
- Comments should explain *why*, not *what*
- No dead code — do not leave commented-out code in commits
- No console.log left in committed code — use a proper logger

### React
- Functional components only — no class components
- Custom hooks for reusable logic
- Keep components small and focused
- Co-locate component styles and tests with the component file

### File Structure
```
src/
├── main/           # Electron main process
├── renderer/       # React app (renderer process)
│   ├── components/ # UI components
│   ├── hooks/      # Custom React hooks
│   ├── pages/      # Top-level page components
│   └── store/      # State management
├── shared/         # Types and utilities shared between main and renderer
└── database/       # SQLite schema and queries
```

---

## Testing
- Write tests alongside code — not after
- Every function with logic gets a unit test
- Use Jest for unit tests
- Use React Testing Library for component tests
- Do not commit untested logic

---

## Git Conventions

### Branches
- Never commit directly to `main`
- Branch names should be descriptive: `feat/jira-integration`, `fix/worktree-conflict`

### Commit Messages
Use conventional commits:
```
feat: add Jira task import
fix: resolve worktree path on macOS
docs: update README with installation steps
refactor: simplify agent status polling
test: add unit tests for PR description generator
chore: update dependencies
```

Each commit should be atomic — one logical change per commit.

---

## Explore Before You Code

Before making any change:
1. Read the relevant files and understand the existing pattern
2. Follow that pattern unless there is a good reason not to
3. If you are unsure, stop and ask rather than guess

---

## What Not To Do
- Do not install a library without discussing it first
- Do not refactor code that is not related to the current task
- Do not add features that were not asked for
- Do not use `any` in TypeScript
- Do not leave TODO comments in committed code — either do it or create a task for it