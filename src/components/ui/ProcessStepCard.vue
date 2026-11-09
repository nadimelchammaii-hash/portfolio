<template>
  <div class="process-step">
    <span class="process-step-number font-mono text-primary">{{ String(step.step).padStart(2, '0') }}</span>
    <div class="process-step-bar" />
    <h3 class="process-step-title font-mono">{{ step.title }}</h3>
    <p class="process-step-description text-medium-emphasis">{{ step.description }}</p>
  </div>
</template>

<script lang="ts" setup>
  import type { ProcessStep } from '@/types/content'

  defineProps<{
    step: ProcessStep
  }>()
</script>

<style scoped>
.process-step-number {
  font-size: 0.875rem;
}

.process-step-bar {
  margin-top: 12px;
  margin-bottom: 16px;
  width: 32px;
  height: 2px;
  background-color: rgba(var(--v-theme-outlineVariant), 0.5);
}

.process-step-title {
  font-size: 1rem;
  margin-bottom: 8px;
}

.process-step-description {
  font-size: 0.9375rem;
  line-height: 1.5;
}
</style>
