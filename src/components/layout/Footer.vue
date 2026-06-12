<script setup lang="ts">
const config = useAppConfig()
const currentYear = new Date().getFullYear()

const showWeChatModal = ref(false)
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
            v-if="config.social.xiaohongshu"
            :href="config.social.xiaohongshu"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-primary-500 transition-colors"
            aria-label="小红书"
          >
            <Icon name="ph:book-bookmark-duotone" class="text-xl" />
          </a>
          <button
            v-if="config.social.wechat"
            @click="showWeChatModal = true"
            class="text-text-muted hover:text-primary-500 transition-colors"
            aria-label="微信"
          >
            <Icon name="ph:chat-circle-dots-duotone" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- WeChat Modal -->
    <WeChatModal v-model:show="showWeChatModal" @close="showWeChatModal = false" />
  </footer>
</template>
