<script setup lang="ts">
const config = useAppConfig()

const showWeChatModal = ref(false)

const heroContent = {
  greeting: '你好，我是',
  name: config.author.name,
  title: config.author.title,
  personality: config.author.personality,
  tagline: config.author.tagline,
  dream: '数字游民梦想',
  cta: {
    primary: { label: '查看项目', to: '/projects' },
    secondary: { label: '阅读想法', to: '/ideas' },
  },
}
</script>

<template>
  <section class="section relative overflow-hidden min-h-[88vh] flex items-center">
    <!-- Ambient background glows -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary-500/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent-500/10 blur-3xl"
    />

    <div class="container-custom relative w-full">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left: identity + action -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <!-- Greeting -->
          <p
            class="text-base md:text-lg text-text-muted mb-4 tracking-wide animate-fade-in"
          >
            {{ heroContent.greeting }}
          </p>

          <!-- Name -->
          <h1 class="mb-5 animate-slide-up">
            <span class="gradient-text">{{ heroContent.name }}</span>
          </h1>

          <!-- Title -->
          <p
            class="text-xl md:text-2xl font-medium text-text mb-7 animate-slide-up"
            style="animation-delay: 0.1s"
          >
            {{ heroContent.title }}
          </p>

          <!-- Tagline -->
          <p
            class="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl mb-10 animate-slide-up"
            style="animation-delay: 0.2s"
          >
            {{ heroContent.tagline }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 animate-slide-up" style="animation-delay: 0.3s">
            <NuxtLink :to="heroContent.cta.primary.to" class="btn btn-primary">
              <span>{{ heroContent.cta.primary.label }}</span>
              <Icon name="ph:arrow-right" class="ml-2" />
            </NuxtLink>
            <NuxtLink :to="heroContent.cta.secondary.to" class="btn btn-secondary">
              <span>{{ heroContent.cta.secondary.label }}</span>
              <Icon name="ph:brain" class="ml-2" />
            </NuxtLink>
          </div>

          <!-- Social Links -->
          <div
            class="flex items-center gap-3 mt-12 animate-slide-up"
            style="animation-delay: 0.4s"
          >
            <span class="text-sm text-text-muted mr-1">联系方式</span>
            <span class="h-px w-6 bg-gray-200 dark:bg-gray-800 mr-1" />
            <a
              v-if="config.social.github"
              :href="config.social.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-gray-200 dark:border-gray-800 text-text-muted hover:text-white hover:bg-primary-500 hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="GitHub"
              title="GitHub"
            >
              <Icon name="ph:github-logo" class="text-lg" />
            </a>
            <a
              v-if="config.social.xiaohongshu"
              :href="config.social.xiaohongshu"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-gray-200 dark:border-gray-800 text-text-muted hover:text-white hover:bg-primary-500 hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="小红书"
              title="小红书"
            >
              <Icon name="ph:book-bookmark-duotone" class="text-lg" />
            </a>
            <button
              v-if="config.social.wechat"
              @click="showWeChatModal = true"
              class="flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-gray-200 dark:border-gray-800 text-text-muted hover:text-white hover:bg-primary-500 hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="微信"
              title="微信"
            >
              <Icon name="ph:chat-circle-dots-duotone" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- Right: visual avatar stage -->
        <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div class="relative w-fit">
            <!-- Rotating dashed ring -->
            <div
              aria-hidden="true"
              class="absolute -inset-5 md:-inset-6 rounded-full border-2 border-dashed border-primary-500/25 animate-[spin_22s_linear_infinite]"
            />
            <!-- Soft halo -->
            <div
              aria-hidden="true"
              class="absolute inset-2 rounded-full bg-gradient-to-tr from-primary-500/30 to-accent-500/30 blur-2xl"
            />
            <!-- Avatar -->
            <img
              :src="config.author.avatar"
              :alt="config.author.name"
              class="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-surface shadow-2xl"
            />

            <!-- Floating badge: personality (top-left) -->
            <div
              class="absolute -left-3 md:-left-5 top-8 flex items-center gap-1.5 bg-surface border border-gray-200 dark:border-gray-800 shadow-lg rounded-full pl-2.5 pr-3.5 py-1.5"
            >
              <span class="flex h-2 w-2">
                <span class="inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              <span class="text-sm font-semibold text-text">{{ heroContent.personality }}</span>
            </div>

            <!-- Floating badge: dream (bottom-right) -->
            <div
              class="absolute -right-3 md:-right-5 bottom-8 flex items-center gap-2 bg-surface border border-gray-200 dark:border-gray-800 shadow-lg rounded-full pl-2 pr-4 py-1.5"
            >
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-accent-500/10 text-accent-500">
                <Icon name="ph:globe-hemisphere-west-duotone" class="text-base" />
              </span>
              <span class="text-sm font-medium text-text">{{ heroContent.dream }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WeChat Modal -->
    <WeChatModal v-model:show="showWeChatModal" @close="showWeChatModal = false" />
  </section>
</template>
