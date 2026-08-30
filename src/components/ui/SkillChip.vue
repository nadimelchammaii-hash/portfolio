<template>
  <span class="skill-chip font-mono">{{ label }}</span>
</template>

<script lang="ts" setup>
  defineProps<{
    label: string
  }>()
</script>

<style scoped>
/* A plain styled span rather than v-chip: Vuetify's chip is pill-shaped by
   default and re-skinning it to this flat, rectangular, monospace tag would
   mean fighting more overrides than just writing the handful of rules. */
.skill-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.4);
  color: rgb(var(--v-theme-onSurfaceVariant));
}
</style>
