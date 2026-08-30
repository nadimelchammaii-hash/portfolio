<template>
  <section id="home" class="hero d-flex align-center">
    <HeroVisual v-if="!mobile" />

    <div class="app-container hero-content">
      <h1 class="hero-headline">
        {{ profile.heroHeadline }}
        <span class="hero-accent text-primary">{{ profile.heroHeadlineAccent }}</span>
      </h1>

      <p class="hero-subtext text-medium-emphasis">
        {{ profile.heroSubtext }}
      </p>

      <div class="d-flex flex-wrap ga-4 mt-8">
        <v-btn color="primaryContainer" href="#projects" size="large">
          View My Projects
          <v-icon end icon="mdi-arrow-right" />
        </v-btn>

        <v-btn
          class="font-mono"
          :href="profile.cvUrl"
          size="large"
          variant="outlined"
        >
          <v-icon icon="mdi-download" start />
          Download CV
        </v-btn>
      </div>

      <div class="d-flex ga-2 mt-12 hero-socials">
        <v-btn
          aria-label="GitHub profile"
          :href="profile.githubUrl"
          icon
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-github" />
        </v-btn>

        <v-btn
          aria-label="LinkedIn profile"
          :href="profile.linkedinUrl"
          icon
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-linkedin" />
        </v-btn>

        <v-btn
          :aria-label="`Email ${profile.email}`"
          :href="`mailto:${profile.email}`"
          icon
          variant="text"
        >
          <v-icon icon="mdi-email-outline" />
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'
  import { useDisplay } from 'vuetify'
  import { profile } from '@/data/profile'

  // Three.js is a heavy dependency (~230KB gzipped) that only ever renders
  // on desktop (`v-if="!mobile"` below) — code-splitting it out of the main
  // bundle means mobile visitors, and anyone before this component mounts,
  // never pay for it.
  const HeroVisual = defineAsyncComponent(() => import('@/components/ui/HeroVisual.vue'))

  const { mobile } = useDisplay()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - 80px);
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

/* Matches the Stitch "display-lg" type token: 40px/700/-0.02em on mobile,
   scaling up to 64px/700/-0.04em at our md breakpoint (840px). Vuetify's
   own text-h1..h6 classes are a different, generic type scale, so this
   section defines the exact sizes from the design system directly. */
.hero-headline {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 46rem;
}

@media (min-width: 840px) {
  .hero-headline {
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }
}

.hero-accent {
  font-style: italic;
  font-weight: 400;
}

.hero-subtext {
  font-size: 18px;
  line-height: 1.6;
  max-width: 40rem;
  margin-top: 24px;
}
</style>
