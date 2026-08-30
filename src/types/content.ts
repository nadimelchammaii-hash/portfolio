export interface Profile {
  name: string
  title: string
  heroHeadline: string
  heroHeadlineAccent: string
  heroSubtext: string
  aboutParagraphs: string[]
  email: string
  githubUrl: string
  githubHandle: string
  linkedinUrl: string
  cvUrl: string
}

export interface SkillGroup {
  id: string
  label: string
  icon: string
  skills: string[]
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  description: string
  tech: string[]
  current?: boolean
}

export interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
  gpa?: string
}

export interface LearningItem {
  id: string
  title: string
  description: string
}

export interface ProjectLink {
  label: string
  url: string
  icon: string
}

export interface Project {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  links: ProjectLink[]
  variant: 'featured' | 'compact'
}
