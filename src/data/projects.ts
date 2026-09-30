import type { Project } from '@/types/content'

export const projects: Project[] = [
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
