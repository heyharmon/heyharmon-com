<template>
  <ContentDoc v-slot="{ doc }">
    <!-- <pre>{{ doc }}</pre> -->
    <HomeHero :content="doc"/>
    <HomeLogos/>
    <HomeWorkPreview/>
    <HomeCallToAction/>
  </ContentDoc>
</template>

<script setup>
import HomeHero from '@/components/HomeHero.vue';
import HomeLogos from '@/components/HomeLogos.vue';
import HomeWorkPreview from '@/components/HomeWorkPreview.vue';
import HomeCallToAction from '@/components/HomeCallToAction.vue';

// const { content } = await useAsyncData('homepage', () => queryContent('/').findOne())
</script>