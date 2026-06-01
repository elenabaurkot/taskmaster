# TaskMaster
TaskMaster is a desktop app for engineers using Claude Code. It centralizes the entire AI-assisted development workflow — from task creation and agent execution through PR review and code review responses — in one place.

---

## Tech Stack
- **Electron** — desktop app shell
- **React + TypeScript** — UI
- **SQLite** (via `better-sqlite3`) — local database
- **GitHub API** (via Octokit) — PR and code review integration
- **Jira REST API** (via `jira.js`) — task and issue integration

---

## Getting Started

> Installation steps coming soon.

---

## The Problem
Modern AI-assisted development is powerful but fragmented. If you're running multiple Claude Code agents simultaneously, you're probably:

- Jumping between terminal windows and git worktrees trying to remember which agent is doing what
- Manually spinning up new worktrees and feeding tasks to each agent one by one
- Switching to GitHub to check PR status, review diffs, and respond to review comments
- Losing focus every time you context switch between tools

TaskMaster solves this by giving you a single desktop interface that covers the full workflow: write a spec, break it into tasks (or pull them from Jira), dispatch agents to work on them in isolated worktrees, monitor their progress in real time, review and edit PRs before they're created and respond to code review comments with the assistance of your agent — all without leaving the app.
