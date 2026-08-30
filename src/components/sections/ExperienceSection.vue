<template>
  <section id="experience" class="app-container section-spacing">
    <div class="experience-grid">
      <div>
        <SectionHeading index="03" title="Experience" />

        <div class="experience-list">
          <ExperienceItem v-for="entry in experienceEntries" :key="entry.id" class="experience-list-item" :entry="entry" />
        </div>
      </div>

      <EducationColumn />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import ExperienceItem from '@/components/ui/ExperienceItem.vue'
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { experienceEntries } from '@/data/experience'
  import EducationColumn from './EducationColumn.vue'
</script>

<style scoped>
.experience-grid {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

@media (min-width: 1145px) {
  .experience-grid {
    flex-direction: row;
    align-items: flex-start;
  }

  .experience-grid > * {
    flex: 1;
    min-width: 0;
  }
}

.experience-list {
  position: relative;
  margin-top: 32px;
  margin-left: 12px;
  border-left: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  padding-left: 20px;
}

.experience-list-item:not(:last-child) {
  margin-bottom: 40px;
}
</style>
