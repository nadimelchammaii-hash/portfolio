<template>
  <section id="services" class="app-container section-spacing">
    <SectionHeading index="02" title="Services" />

    <div class="services-grid">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import ServiceCard from '@/components/ui/ServiceCard.vue'
  import { services } from '@/data/services'
</script>

<style scoped>
.services-grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 960px) {
  .services-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
}
</style>
