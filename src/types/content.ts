export interface Profile {
  name: string
  title: string
  heroHeadline: string
  heroHeadlineAccent: string
  heroSubtext: string
  availabilityBadge: string
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
  /** One-sentence outcome shown above the feature bullets. */
  outcome: string
  /** 3 short feature bullets. */
  bullets: string[]
  /** Long technical paragraph, shown in the card's collapsible "Technical details". */
  description: string
  tech: string[]
  /** Target for the card's prominent "Try the live demo" button. */
  demoUrl: string
  /** Secondary links (Backend / Frontend repos). */
  links: ProjectLink[]
  variant: 'featured' | 'compact'
  screenshot: string
  screenshotAlt: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}
