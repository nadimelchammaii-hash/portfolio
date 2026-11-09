import type { ServiceItem } from '@/types/content'

export const services: ServiceItem[] = [
  {
    id: 'web-apps',
    title: 'Web apps from idea to production',
    description: 'Laravel + Vue, deployed with Docker & HTTPS.',
    deliverable: 'Delivered as source code, deployed, and documented for handover.',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    id: 'ai-features',
    title: 'AI features for your product',
    description: 'Chat with your documents, RAG, OpenAI integrations.',
    deliverable: 'Delivered as a working feature, wired into your existing app.',
    icon: 'mdi-robot-outline',
  },
  {
    id: 'laravel-support',
    title: 'Fix, extend or deploy your Laravel app',
    description: 'Bugs, new features, performance, server setup.',
    deliverable: 'Delivered as a tested fix or feature, merged into your codebase.',
    icon: 'mdi-wrench-outline',
  },
]
