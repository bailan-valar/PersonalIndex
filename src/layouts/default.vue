<script setup lang="ts">
const config = useAppConfig()

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  meta: [
    {
      script: {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: config.author.name,
          description: config.author.tagline,
          jobTitle: config.author.title,
          url: 'https://dean.dev',
        }),
      },
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col flex-1 bg-background text-text">
    <Header />

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <Footer />
  </div>
</template>
