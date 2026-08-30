<template>
  <div class="education-column">
    <SectionHeading index="04" title="Education & Growth" />

    <EducationCard v-for="entry in educationEntries" :key="entry.id" class="education-column-card" :entry="entry" />

    <div class="education-languages">
      <SkillChip v-for="lang in languages" :key="lang.name" :label="`${lang.name} — ${lang.level}`" />
    </div>

    <CurrentlyLearningCard :items="learningItems" />
  </div>
</template>

<script lang="ts" setup>
  import CurrentlyLearningCard from '@/components/ui/CurrentlyLearningCard.vue'
  import EducationCard from '@/components/ui/EducationCard.vue'
  import SectionHeading from '@/components/ui/SectionHeading.vue'
  import SkillChip from '@/components/ui/SkillChip.vue'
  import { educationEntries, languages } from '@/data/education'
  import { learningItems } from '@/data/learning'
</script>

<style scoped>
.education-column-card {
  margin-top: 32px;
  margin-bottom: 16px;
}

.education-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
</style>
