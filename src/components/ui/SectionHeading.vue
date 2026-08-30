<template>
  <div>
    <h2 class="section-heading">
      <span class="section-heading-index font-mono text-primary">{{ index }}.</span>
      {{ title }}
    </h2>

    <div class="section-heading-bar" />
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    index: string
    title: string
  }>()
</script>

<style scoped>
/* Matches the Stitch "headline-md" token: 32px/600/-0.02em. Vuetify's
   generic text-h* classes don't carry this exact custom scale. */
.section-heading {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.section-heading-index {
  margin-right: 0.4rem;
}

.section-heading-bar {
  margin-top: 16px;
  width: 48px;
  height: 4px;
  border-radius: 9999px;
  background-color: rgba(var(--v-theme-outlineVariant), 0.4);
}
</style>
