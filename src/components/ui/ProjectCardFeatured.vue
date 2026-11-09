<template>
  <article class="project-card">
    <a
      :aria-label="`Open the ${project.name} live demo in a new tab`"
      class="project-visual"
      :href="project.demoUrl"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        :alt="project.screenshotAlt"
        class="project-screenshot"
        loading="lazy"
        :src="project.screenshot"
      >
    </a>

    <div class="project-content">
      <div class="project-content-primary">
        <p class="project-eyebrow font-mono text-primary">{{ project.tagline }}</p>
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-outcome text-medium-emphasis">{{ project.outcome }}</p>

        <ul class="project-bullets">
          <li v-for="bullet in project.bullets" :key="bullet">
            <v-icon color="primary" icon="mdi-check" size="16" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div class="project-content-secondary">
        <p class="project-tech-line font-mono text-medium-emphasis">{{ project.tech.join(' · ') }}</p>

        <div class="project-actions">
          <div class="d-flex flex-wrap align-center ga-3">
            <v-btn
              color="primaryContainer"
              :href="project.demoUrl"
              rel="noopener noreferrer"
              target="_blank"
            >
              Try the live demo
              <v-icon end icon="mdi-open-in-new" />
            </v-btn>

            <span class="project-no-signup font-mono text-medium-emphasis">No sign-up needed</span>
          </div>

          <div class="d-flex flex-wrap ga-4 mt-3">
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

        <v-expansion-panels class="project-details" variant="accordion">
          <v-expansion-panel bg-color="surfaceContainer">
            <v-expansion-panel-title class="font-mono project-details-title">
              Technical details
            </v-expansion-panel-title>

            <v-expansion-panel-text class="project-details-text text-medium-emphasis">
              <p>{{ project.description }}</p>

              <img
                v-if="project.extraScreenshot"
                :alt="project.extraScreenshotAlt"
                class="project-extra-screenshot"
                loading="lazy"
                :src="project.extraScreenshot"
              >
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
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

.project-visual {
  display: block;
  aspect-ratio: 16 / 10;
  background-color: rgb(var(--v-theme-surface));
  border-bottom: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
}

.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-content {
  padding: 32px;
}

/* Two columns at desktop width: left is the pitch (title, outcome,
   bullets), right is the proof and follow-through (tech, CTA, links,
   technical details). Below 960px these two divs just stack in DOM
   order, which is already the original single-column mobile layout. */
@media (min-width: 960px) {
  .project-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 40px;
  }
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
  margin-bottom: 12px;
}

.project-outcome {
  font-size: 1.0625rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.project-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.9375rem;
  color: rgb(var(--v-theme-onSurfaceVariant));
}

.project-bullets .v-icon {
  margin-top: 3px;
  flex: 0 0 auto;
}

.project-tech-line {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-onSurfaceVariant));
  margin-bottom: 24px;
}

.project-actions {
  margin-bottom: 8px;
}

.project-no-signup {
  font-size: 0.75rem;
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

.project-details {
  margin-top: 16px;
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
}

.project-details-title {
  font-size: 0.875rem;
  min-height: 48px;
}

.project-details-text {
  font-size: 0.9375rem;
  line-height: 1.6;
}

.project-extra-screenshot {
  display: block;
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
}
</style>
