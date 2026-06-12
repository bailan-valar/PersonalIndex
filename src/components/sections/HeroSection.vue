<script setup lang="ts">
const config = useAppConfig()

const heroContent = {
  greeting: '你好，我是',
  name: config.author.name,
  title: config.author.title,
  personality: config.author.personality,
  tagline: config.author.tagline,
  dream: '梦想是到世界各地做数字游民',
  cta: {
    primary: { label: '查看项目', to: '/projects' },
    secondary: { label: '阅读想法', to: '/ideas' },
  },
}
</script>

<template>
  <section class="section min-h-[80vh] flex items-center justify-center">
    <div class="container-custom">
      <div class="max-w-3xl">
        <!-- Greeting -->
        <p class="text-lg text-text-muted mb-4 animate-fade-in">
          {{ heroContent.greeting }}
        </p>

        <!-- Name -->
        <h1 class="mb-4 animate-slide-up">
          <span class="gradient-text">{{ heroContent.name }}</span>
        </h1>

        <!-- Title -->
        <p class="text-2xl md:text-3xl text-text mb-6 animate-slide-up" style="animation-delay: 0.1s">
          {{ heroContent.title }}
        </p>

        <!-- Personality Badge -->
        <div class="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-500 px-4 py-2 rounded-full mb-6 animate-slide-up" style="animation-delay: 0.2s">
          <Icon name="ph:sparkle-duotone" class="text-lg" />
          <span class="font-medium">{{ heroContent.personality }}</span>
        </div>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed animate-slide-up" style="animation-delay: 0.3s">
          {{ heroContent.tagline }}
        </p>

        <!-- Dream -->
        <p class="text-lg text-text-muted mb-12 animate-slide-up" style="animation-delay: 0.4s">
          🌍 {{ heroContent.dream }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 animate-slide-up" style="animation-delay: 0.5s">
          <NuxtLink :to="heroContent.cta.primary.to" class="btn btn-primary">
            <span>{{ heroContent.cta.primary.label }}</span>
            <Icon name="ph:arrow-right" class="ml-2" />
          </NuxtLink>
          <NuxtLink :to="heroContent.cta.secondary.to" class="btn btn-secondary">
            <span>{{ heroContent.cta.secondary.label }}</span>
            <Icon name="ph:brain" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
