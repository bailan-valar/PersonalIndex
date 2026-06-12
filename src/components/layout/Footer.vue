<script setup lang="ts">
const config = useAppConfig()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface border-t border-gray-200 dark:border-gray-800">
    <div class="container-custom py-8">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div class="text-sm text-text-muted">
          <span>© {{ currentYear }} {{ config.author.name }}. All rights reserved.</span>
        </div>

        <!-- Tagline -->
        <div class="text-sm text-text-muted italic">
          "{{ config.author.tagline }}"
        </div>

        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <a
            v-if="config.social.github"
            :href="config.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-primary-500 transition-colors"
            aria-label="GitHub"
          >
            <Icon name="ph:github-logo" class="text-xl" />
          </a>
          <a
            v-if="config.social.twitter"
            :href="config.social.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-primary-500 transition-colors"
            aria-label="Twitter"
          >
            <Icon name="ph:twitter-logo" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
