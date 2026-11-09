<template>
  <section id="experience" class="app-container section-spacing">
    <SectionHeading index="04" title="Experience" />

    <div class="experience-list">
      <ExperienceItem v-for="entry in experienceEntries" :key="entry.id" class="experience-list-item" :entry="entry" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import ExperienceItem from '@/components/ui/ExperienceItem.vue'
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { experienceEntries } from '@/data/experience'
</script>

<style scoped>
.experience-list {
  position: relative;
  margin-top: 48px;
  margin-left: 12px;
  max-width: 48rem;
  border-left: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  padding-left: 20px;
}

.experience-list-item:not(:last-child) {
  margin-bottom: 40px;
}
</style>
