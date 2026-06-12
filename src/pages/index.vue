<script setup lang="ts">
// SEO
useSeoMeta({
  title: '迪恩 - Independent Developer | INFJ | 数字游民',
  description: '独立开发者迪恩的个人主页。INFJ，梦想成为数字游民，喜欢把各种奇思妙想变成现实。',
  ogTitle: '迪恩 - Independent Developer',
  ogDescription: '喜欢把各种奇思妙想变成现实',
  ogType: 'website',
})

// Structured data
useSchemaOrg([
  defineWebPage({
    name: '迪恩的个人主页',
    description: '独立开发者迪恩的个人主页',
  }),
])
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <IdeasSection />
  </div>
</template>
