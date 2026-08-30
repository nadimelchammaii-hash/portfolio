<template>
  <v-card class="skill-group-card" elevation="0">
    <div class="d-flex align-center ga-3 mb-4">
      <v-icon color="primary" :icon="group.icon" />
      <h3 class="skill-group-label font-mono">{{ group.label }}</h3>
    </div>

    <div class="d-flex flex-wrap ga-2">
      <SkillChip v-for="skill in group.skills" :key="skill" :label="skill" />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
  import type { SkillGroup } from '@/types/content'
  import SkillChip from './SkillChip.vue'

  defineProps<{
    group: SkillGroup
  }>()
</script>

<style scoped>
.skill-group-card {
  padding: 24px;
  background-color: rgb(var(--v-theme-surfaceContainer));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

.skill-group-card:hover {
  border-color: rgb(var(--v-theme-primary));
}

.skill-group-label {
  font-size: 0.9375rem;
  letter-spacing: 0.02em;
}
</style>
