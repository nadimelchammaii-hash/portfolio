<template>
  <section id="services" class="app-container section-spacing services-section">
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
/* Services and How I Work (src/components/sections/HowIWorkSection.vue) are
   both single-row, short-content sections — the shared .section-spacing
   padding is identical to every other section boundary, but with so little
   content on either side of this particular seam it reads as a much bigger
   gap than the same padding does elsewhere. Tightened locally, rather than
   changing .section-spacing itself and affecting every other section. */
@media (min-width: 840px) {
  .services-section {
    padding-bottom: 64px;
  }
}

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
