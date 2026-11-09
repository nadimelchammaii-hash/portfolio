<template>
  <section id="about" class="app-container section-spacing">
    <div class="about-grid">
      <div class="about-label">
        <SectionHeading index="06" title="Background" />
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

    <EducationColumn class="about-education" />
  </section>
</template>

<script lang="ts" setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import { profile } from '@/data/profile'
  import EducationColumn from './EducationColumn.vue'
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

.about-education {
  margin-top: 64px;
}

@media (min-width: 840px) {
  .about-education {
    margin-top: 96px;
  }
}
</style>
