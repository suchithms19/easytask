## Task Management App

Lightweight Angular app that demonstrates a user/task list with add/complete interactions. Built with Angular 20 and TypeScript.

### Tech stack
- **Framework**: Angular 20 (Standalone components)
- **Language**: TypeScript
- **Tooling**: Angular CLI, Karma/Jasmine

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm 9+

### Setup
```bash
pnpm install
```

### Scripts
- **Start dev server**:
```bash
pnpm start
```
Opens `http://localhost:4200/` with hot reload.

### App structure (high level)
- `src/app/app.ts` — root component holding selected user state
- `src/app/user/` — `User` component for rendering a user item
- `src/app/tasks/` — `Tasks` list for a selected user, add/complete logic
- `src/app/task/` — individual `Task` item
- `src/app/add-task/` — `AddTask` form component
- `src/app/dummy-users.ts` — demo users
- `src/app/dummy-tasks.ts` — demo tasks
