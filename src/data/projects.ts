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
  },
]
