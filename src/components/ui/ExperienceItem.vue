<template>
  <div class="experience-item">
    <span class="experience-dot" :class="{ 'experience-dot--current': entry.current }" />

    <div class="experience-heading">
      <h3 class="experience-role font-mono">{{ entry.role }}</h3>
      <span class="experience-company font-mono text-medium-emphasis">{{ entry.company }}</span>
    </div>

    <p class="experience-period font-mono text-medium-emphasis">{{ entry.period }}</p>
    <p class="experience-description text-medium-emphasis">{{ entry.description }}</p>

    <div class="d-flex flex-wrap ga-2">
      <span v-for="tech in entry.tech" :key="tech" class="experience-tech font-mono">{{ tech }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ExperienceEntry } from '@/types/content'

  defineProps<{
    entry: ExperienceEntry
  }>()
</script>

<style scoped>
.experience-item {
  position: relative;
  padding-left: 32px;
}

.experience-dot {
  position: absolute;
  left: -5px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(var(--v-theme-outlineVariant));
  outline: 4px solid rgb(var(--v-theme-background));
}

.experience-dot--current {
  background-color: rgb(var(--v-theme-primaryContainer));
}

.experience-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: 8px;
  margin-bottom: 4px;
}

.experience-role {
  font-size: 1.0625rem;
  color: rgb(var(--v-theme-onSurface));
}

.experience-period {
  font-size: 0.75rem;
  margin-bottom: 12px;
}

.experience-description {
  margin-bottom: 16px;
  line-height: 1.5;
}

.experience-tech {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 2px;
  color: rgb(var(--v-theme-primary));
  background-color: rgba(var(--v-theme-primaryContainer), 0.1);
}
</style>
