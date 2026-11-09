import type { ServiceItem } from '@/types/content'

export const services: ServiceItem[] = [
  {
    id: 'web-apps',
    title: 'Web apps from idea to production',
    description: 'Laravel + Vue, deployed with Docker & HTTPS.',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    id: 'ai-features',
    title: 'AI features for your product',
    description: 'Chat with your documents, RAG, OpenAI integrations.',
    icon: 'mdi-robot-outline',
  },
  {
    id: 'laravel-support',
    title: 'Fix, extend or deploy your Laravel app',
    description: 'Bugs, new features, performance, server setup.',
    icon: 'mdi-wrench-outline',
  },
]
