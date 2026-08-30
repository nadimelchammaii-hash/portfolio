<template>
  <v-card class="learning-card" elevation="0">
    <div class="learning-card-header font-mono d-flex align-center ga-2">
      <span class="pulse-dot" />
      Currently Exploring
    </div>

    <div class="learning-grid">
      <div v-for="item in items" :key="item.id" class="learning-tile">
        <h4 class="learning-tile-title font-mono text-primary">{{ item.title }}</h4>
        <p class="learning-tile-description text-medium-emphasis">{{ item.description }}</p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
  import type { LearningItem } from '@/types/content'

  defineProps<{
    items: LearningItem[]
  }>()
</script>

<style scoped>
.learning-card {
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.learning-card-header {
  padding: 16px 24px;
  font-size: 0.8125rem;
  background-color: rgb(var(--v-theme-surfaceContainerLow));
  border-bottom: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
}

.learning-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 24px;
}

@media (min-width: 600px) {
  .learning-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.learning-tile {
  padding: 16px;
  border-radius: 4px;
  background-color: rgb(var(--v-theme-surfaceContainer));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.2);
}

.learning-tile-title {
  font-size: 0.875rem;
  margin-bottom: 8px;
}

.learning-tile-description {
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
