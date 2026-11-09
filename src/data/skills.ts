import type { SkillGroup } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'mdi-web',
    skills: ['Vue.js', 'Vuetify', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'mdi-server',
    skills: ['Laravel', 'PHP', 'ASP.NET MVC', 'C#', 'Node.js', 'Express.js', 'Python', 'WebSockets (Laravel Reverb)', 'OpenAI API'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'mdi-database',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redis', 'pgvector'],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    icon: 'mdi-toolbox-outline',
    skills: ['Git/GitHub', 'REST APIs', 'Docker', 'GitHub Actions', 'Caddy'],
  },
]
