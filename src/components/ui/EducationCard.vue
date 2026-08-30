<template>
  <v-card class="education-card" elevation="0">
    <div class="d-flex ga-4">
      <div class="education-icon">
        <v-icon color="primary" icon="mdi-school-outline" />
      </div>

      <div>
        <h3 class="education-degree font-mono">{{ entry.degree }}</h3>
        <p class="education-institution text-medium-emphasis font-mono">{{ entry.institution }}</p>

        <p class="education-period font-mono text-medium-emphasis">
          {{ entry.period }}<template v-if="entry.gpa"> · GPA {{ entry.gpa }}</template>
        </p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
  import type { EducationEntry } from '@/types/content'

  defineProps<{
    entry: EducationEntry
  }>()
</script>

<style scoped>
.education-card {
  padding: 24px;
  background-color: rgb(var(--v-theme-surfaceContainer));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

.education-card:hover {
  border-color: rgba(var(--v-theme-primary), 0.3);
}

.education-icon {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.2);
}

.education-degree {
  font-size: 1.0625rem;
  margin-bottom: 4px;
}

.education-institution {
  margin-bottom: 4px;
}

.education-period {
  font-size: 0.75rem;
}
</style>
