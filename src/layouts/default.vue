<script setup lang="ts">
const config = useAppConfig()

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
})

useSchemaOrg([
  definePerson({
    name: config.author.name,
    description: config.author.tagline,
    jobTitle: config.author.title,
    url: 'https://dean.dev',
  }),
])
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-text">
    <AppHeader />

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
