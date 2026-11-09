<template>
  <section id="how-i-work" class="app-container section-spacing how-i-work-section">
    <SectionHeading index="03" title="How I Work" />

    <div class="process-steps">
      <ProcessStepCard v-for="step in processSteps" :key="step.id" :step="step" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import ProcessStepCard from '@/components/ui/ProcessStepCard.vue'
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { processSteps } from '@/data/process'
</script>

<style scoped>
/* Tightens only the seam shared with Services (see its matching comment) —
   the bottom padding here, going into Experience, is untouched. */
@media (min-width: 840px) {
  .how-i-work-section {
    padding-top: 64px;
  }
}

.process-steps {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 840px) {
  .process-steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
</style>
