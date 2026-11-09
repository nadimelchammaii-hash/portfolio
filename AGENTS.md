# Project Rules

## General
- Follow the existing code style and patterns.
- Use npm for running project commands.
- Keep code in TypeScript unless migration is required.

## Stack
- Framework: Vue 3 + Vite
- UI Library: Vuetify
- Enabled Features: ESLint, Vuetify MCP, Vue Router
- Explicitly NOT used: Pinia (no shared state needed), Vue I18n (single-language site), Tailwind CSS (removed early — Vuetify's own utilities and scoped component styles cover this project's needs). Do not reintroduce these without asking; they were deliberate decisions, not oversights.
