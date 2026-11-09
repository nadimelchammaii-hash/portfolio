import type { ProcessStep } from '@/types/content'

export const processSteps: ProcessStep[] = [
  {
    id: 'discuss',
    step: 1,
    title: 'Discuss your goal',
    description: 'We talk through what you need and whether I\'m the right fit — no cost, no pressure.',
  },
  {
    id: 'plan',
    step: 2,
    title: 'Plan & estimate',
    description: 'I break the work into milestones and give you a clear scope and timeline before anything starts.',
  },
  {
    id: 'build',
    step: 3,
    title: 'Build with regular updates',
    description: 'I build in small increments and keep you posted, so there are no surprises at the end.',
  },
  {
    id: 'deploy',
    step: 4,
    title: 'Deploy & hand over',
    description: 'I deploy it myself — Docker, HTTPS, the real thing — and hand over everything you need to maintain it.',
  },
]
