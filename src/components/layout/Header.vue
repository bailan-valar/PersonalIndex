<script setup lang="ts">
const config = useAppConfig()
const colorMode = useColorMode()

const navItems = computed(() => config.nav.main)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <span class="text-2xl font-display font-bold gradient-text">{{ config.author.name }}</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-sm font-medium transition-colors hover:text-primary-500"
            active-class="text-primary-500"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          >
            <Icon :name="isDark ? 'ph:sun-dim-duotone' : 'ph:moon-stars-duotone'" class="text-xl" />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center space-x-2">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Icon :name="isDark ? 'ph:sun-dim-duotone' : 'ph:moon-stars-duotone'" class="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
