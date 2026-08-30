<template>
  <article class="project-card">
    <!--
      No real project screenshot exists yet, and a fabricated one would be
      dishonest. This panel stands in for it with a code-inspired visual
      instead of a stock/placeholder photo — swap in a real <img> here once
      a screenshot is available, no other markup needs to change.
    -->
    <div class="project-visual grid-bg">
      <v-icon color="primary" icon="mdi-wallet-outline" size="56" />
      <p class="project-visual-tag font-mono">$ docker compose up</p>
    </div>

    <div class="project-content">
      <p class="project-eyebrow font-mono text-primary">{{ project.tagline }}</p>
      <h3 class="project-title">{{ project.name }}</h3>
      <p class="project-description text-medium-emphasis">{{ project.description }}</p>

      <div class="d-flex flex-wrap ga-2 project-tech">
        <span v-for="tech in project.tech" :key="tech" class="project-tech-item font-mono">{{ tech }}</span>
      </div>

      <div class="d-flex flex-wrap ga-4">
        <a
          v-for="link in project.links"
          :key="link.label"
          class="project-link font-mono"
          :href="link.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon :icon="link.icon" size="18" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
  import type { Project } from '@/types/content'

  defineProps<{
    project: Project
  }>()
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-surfaceContainer));
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: rgb(var(--v-theme-primary));
}

@media (min-width: 960px) {
  .project-card {
    flex-direction: row;
  }
}

.project-visual {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px;
  background-color: rgb(var(--v-theme-surface));
  border-bottom: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
}

@media (min-width: 960px) {
  .project-visual {
    flex: 0 0 42%;
    border-bottom: none;
    border-right: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  }
}

.project-visual-tag {
  font-size: 0.8125rem;
  color: rgb(var(--v-theme-onSurfaceVariant));
}

.project-content {
  padding: 32px;
  flex: 1;
}

.project-eyebrow {
  font-size: 0.8125rem;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 24px;
}

.project-tech {
  margin-bottom: 24px;
}

.project-tech-item {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-onSurfaceVariant));
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: rgb(var(--v-theme-onSurface));
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
