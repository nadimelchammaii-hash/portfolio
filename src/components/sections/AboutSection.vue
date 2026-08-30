<template>
  <section id="about" class="app-container section-spacing">
    <div class="about-grid">
      <div class="about-label">
        <SectionHeading index="01" title="Background" />
      </div>

      <div class="about-content">
        <p
          v-for="(paragraph, i) in profile.aboutParagraphs"
          :key="i"
          class="about-paragraph text-medium-emphasis"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { profile } from '@/data/profile'
</script>

<style scoped>
.about-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 840px) {
  .about-grid {
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
  }

  .about-label {
    flex: 0 0 33%;
    /* Sticks the section label in view while the (currently short) content
       column scrolls past it — a small detail from the source design that
       will matter more once the surrounding sections give the page real
       scroll length. */
    position: sticky;
    top: 96px;
  }

  .about-content {
    flex: 1;
  }
}

.about-paragraph {
  font-size: 18px;
  line-height: 1.6;
}

.about-paragraph + .about-paragraph {
  margin-top: 24px;
}
</style>
