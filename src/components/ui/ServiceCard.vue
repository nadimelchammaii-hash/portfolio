<template>
  <v-card class="service-card" elevation="0">
    <v-icon color="primary" :icon="service.icon" size="32" />
    <h3 class="service-title">{{ service.title }}</h3>
    <p class="service-description text-medium-emphasis">{{ service.description }}</p>
  </v-card>
</template>

<script lang="ts" setup>
  import type { ServiceItem } from '@/types/content'

  defineProps<{
    service: ServiceItem
  }>()
</script>

<style scoped>
.service-card {
  padding: 32px 24px;
  background-color: rgb(var(--v-theme-surfaceContainer));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

.service-card:hover {
  border-color: rgb(var(--v-theme-primary));
}

.service-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 8px;
}

.service-description {
  font-size: 0.9375rem;
  line-height: 1.5;
}
</style>
