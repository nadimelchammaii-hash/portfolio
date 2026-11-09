import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    id: 'askmydocs',
    slug: 'askmydocs',
    name: 'AskMyDocs',
    tagline: 'Featured Project',
    outcome: 'Upload a PDF, ask questions, and get answers with the exact page cited.',
    bullets: [
      'Every answer cites its source page',
      'Says "not found" instead of guessing',
      'Click a citation to jump to the highlighted text in the PDF',
    ],
    description:
      'An AI document assistant: upload PDFs and ask questions about them, with every answer grounded in the document and cited by page. Built as a retrieval-augmented generation (RAG) pipeline — queued workers extract the text, split it into chunks, and store OpenAI embeddings in PostgreSQL with pgvector; each question retrieves the most relevant passages with an exact per-document vector search, and the model answers through Structured Outputs, citing only the passages it was given (or saying the answer is not in the document). Clicking a citation opens the PDF at that page with the quoted text highlighted. Document text is treated as untrusted input to resist prompt injection, and per-user rate limits and daily question budgets cap the AI costs. Built with a Laravel API and a Vue/Vuetify SPA using Sanctum\'s cookie-based auth; production Docker images are built and published by GitHub Actions, and the stack runs next to PulseBoard on the same server behind its Caddy, with memory limits per container.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Docker', 'Caddy'],
    demoUrl: 'https://askmydocs.org',
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/askmydocs-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/askmydocs-frontend', icon: 'mdi-github' },
    ],
    variant: 'featured',
    screenshot: '/projects/askmydocs.svg',
    screenshotAlt: 'AskMyDocs chat interface showing a cited answer next to the source PDF page',
  },
  {
    id: 'pulseboard',
    slug: 'pulseboard',
    name: 'PulseBoard',
    tagline: 'Featured Project',
    outcome: 'A real-time project board for teams — like a lightweight Jira.',
    bullets: [
      'Kanban boards, tasks and comments',
      'Live updates over WebSockets',
      'Workspace and project roles with permissions',
    ],
    description:
      'A full-stack team collaboration and project-management platform — workspaces, projects, Kanban boards, tasks, comments, and role-based membership with policy-driven authorization at both the workspace and project level. Real-time updates (task moves, comments, notifications) broadcast live over WebSockets via Laravel Reverb, backed by a Redis-driven queue, targeted caching, and per-visitor rate limiting. Built with a Laravel API and a Vue/Vuetify SPA using Sanctum\'s cookie-based auth, the same pattern as TrackMyWallet. Deployed on a single domain behind Caddy, which terminates HTTPS and routes API, WebSocket, and static frontend traffic to separate containers — built through a GitHub Actions CI pipeline (lint, test, Docker image builds) and shipped with a one-command deploy script on the server.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'MySQL', 'Redis', 'Docker', 'Caddy'],
    demoUrl: 'https://pulseboardapp.org',
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/pulseboard-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/pulseboard-frontend', icon: 'mdi-github' },
    ],
    variant: 'featured',
    screenshot: '/projects/pulseboard.svg',
    screenshotAlt: 'PulseBoard Kanban view with tasks, comments and live team activity',
  },
  {
    id: 'trackmywallet',
    slug: 'trackmywallet',
    name: 'TrackMyWallet',
    tagline: 'Featured Project',
    outcome: 'A personal finance app for accounts, budgets and savings goals.',
    bullets: [
      'Transfers between accounts',
      'Budgets and savings goals',
      'Reports with spending trends and category breakdown',
    ],
    description:
      'A full-stack personal finance tracker for managing accounts, transactions, budgets, and savings goals. Built with a Laravel API and a Vue/Vuetify single-page frontend, using Sanctum\'s cookie-based SPA authentication rather than a simpler bearer-token setup. Supports transfers between accounts, budget tracking, savings goals with contribution history, and a reporting dashboard — spending trends, category breakdown, and budget performance — built with Chart.js. Deployed as two independently containerized services behind a Caddy reverse proxy with automatic HTTPS.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'MySQL', 'Docker', 'Caddy'],
    demoUrl: 'https://trackmywallet.org',
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/personal-wallet-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/personal-wallet-frontend', icon: 'mdi-github' },
    ],
    variant: 'featured',
    screenshot: '/projects/trackmywallet.svg',
    screenshotAlt: 'TrackMyWallet dashboard showing account balances and a spending breakdown chart',
  },
]
