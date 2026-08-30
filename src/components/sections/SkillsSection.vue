<template>
  <section id="skills" class="app-container section-spacing">
    <div class="skills-grid">
      <div class="skills-label">
        <SectionHeading index="02" title="Technical Arsenal" />

        <p class="skills-description text-medium-emphasis">
          The technologies I use most, across the frontend, backend, and infrastructure of the applications I build.
        </p>
      </div>

      <div class="skills-cards">
        <SkillGroupCard v-for="group in skillGroups" :key="group.id" :group="group" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import SkillGroupCard from '@/components/ui/SkillGroupCard.vue'
  import { skillGroups } from '@/data/skills'
</script>

<style scoped>
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 840px) {
  .skills-grid {
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;
  }

  .skills-label {
    flex: 0 0 33%;
  }

  .skills-cards {
    flex: 1;
  }
}

.skills-description {
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.5;
}

.skills-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 600px) {
  .skills-cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
