import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    id: 'askmydocs',
    slug: 'askmydocs',
    name: 'AskMyDocs',
    tagline: 'Featured Project',
    description:
      'An AI document assistant: upload PDFs and ask questions about them, with every answer grounded in the document and cited by page. Built as a retrieval-augmented generation (RAG) pipeline — queued workers extract the text, split it into chunks, and store OpenAI embeddings in PostgreSQL with pgvector; each question retrieves the most relevant passages with an exact per-document vector search, and the model answers through Structured Outputs, citing only the passages it was given (or saying the answer is not in the document). Clicking a citation opens the PDF at that page with the quoted text highlighted. Document text is treated as untrusted input to resist prompt injection, and per-user rate limits and daily question budgets cap the AI costs. Built with a Laravel API and a Vue/Vuetify SPA using Sanctum\'s cookie-based auth; production Docker images are built and published by GitHub Actions, and the stack runs next to PulseBoard on the same server behind its Caddy, with memory limits per container.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Docker', 'Caddy'],
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/askmydocs-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/askmydocs-frontend', icon: 'mdi-github' },
      { label: 'Live Demo', url: 'https://askmydocs.org', icon: 'mdi-open-in-new' },
    ],
    variant: 'featured',
    icon: 'mdi-file-search-outline',
    visualTag: '$ ask --cite "What does page 12 say?"',
  },
  {
    id: 'trackmywallet',
    slug: 'trackmywallet',
    name: 'TrackMyWallet',
    tagline: 'Featured Project',
    description:
      'A full-stack personal finance tracker for managing accounts, transactions, budgets, and savings goals. Built with a Laravel API and a Vue/Vuetify single-page frontend, using Sanctum\'s cookie-based SPA authentication rather than a simpler bearer-token setup. Supports transfers between accounts, budget tracking, savings goals with contribution history, and a reporting dashboard — spending trends, category breakdown, and budget performance — built with Chart.js. Deployed as two independently containerized services behind a Caddy reverse proxy with automatic HTTPS.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'MySQL', 'Docker', 'Caddy'],
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/personal-wallet-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/personal-wallet-frontend', icon: 'mdi-github' },
      { label: 'Live Demo', url: 'https://trackmywallet.org', icon: 'mdi-open-in-new' },
    ],
    variant: 'featured',
    icon: 'mdi-wallet-outline',
    visualTag: '$ docker compose up',
  },
  {
    id: 'pulseboard',
    slug: 'pulseboard',
    name: 'PulseBoard',
    tagline: 'Featured Project',
    description:
      'A full-stack team collaboration and project-management platform — workspaces, projects, Kanban boards, tasks, comments, and role-based membership with policy-driven authorization at both the workspace and project level. Real-time updates (task moves, comments, notifications) broadcast live over WebSockets via Laravel Reverb, backed by a Redis-driven queue, targeted caching, and per-visitor rate limiting. Built with a Laravel API and a Vue/Vuetify SPA using Sanctum\'s cookie-based auth, the same pattern as TrackMyWallet. Deployed on a single domain behind Caddy, which terminates HTTPS and routes API, WebSocket, and static frontend traffic to separate containers — built through a GitHub Actions CI pipeline (lint, test, Docker image builds) and shipped with a one-command deploy script on the server.',
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Laravel', 'MySQL', 'Redis', 'Docker', 'Caddy'],
    links: [
      { label: 'Backend', url: 'https://github.com/nadimelchammaii-hash/pulseboard-backend', icon: 'mdi-github' },
      { label: 'Frontend', url: 'https://github.com/nadimelchammaii-hash/pulseboard-frontend', icon: 'mdi-github' },
      { label: 'Live Demo', url: 'https://pulseboardapp.org', icon: 'mdi-open-in-new' },
    ],
    variant: 'featured',
    icon: 'mdi-pulse',
    visualTag: '$ ./deploy.sh',
  },
]
