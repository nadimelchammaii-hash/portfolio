<template>
  <section id="projects" class="app-container section-spacing">
    <SectionHeading index="05" title="Featured Works" />

    <div class="projects-list">
      <!--
        Only the 'featured' variant exists today - ProjectCardCompact isn't
        built yet since nothing uses it (every project so far has been
        substantial enough to warrant the full card). Add it, and the filter
        below, when a smaller/secondary project shows up.
      -->
      <ProjectCardFeatured v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import ProjectCardFeatured from '@/components/ui/ProjectCardFeatured.vue'
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { projects } from '@/data/projects'

  const featuredProjects = computed(() => projects.filter(p => p.variant === 'featured'))
</script>

<style scoped>
.projects-list {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
