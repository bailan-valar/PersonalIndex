<script setup lang="ts">
interface Post {
  path?: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
  readingTime?: string
}

const props = defineProps<{
  post: Post
}>()

const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <NuxtLink
    v-if="post.path"
    :to="post.path"
    class="card group hover:border-primary/50 transition-all duration-300"
  >
    <!-- Title -->
    <h3 class="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
      {{ post.title }}
    </h3>

    <!-- Description -->
    <p class="text-text-muted text-sm mb-4 line-clamp-3">
      {{ post.description }}
    </p>

    <!-- Tags -->
    <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in post.tags.slice(0, 3)"
        :key="tag"
        class="text-xs px-2 py-1 rounded-full bg-accent-500/10 text-accent-500"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between text-sm text-text-muted">
      <span v-if="post.date">{{ formatDate(post.date) }}</span>
      <span v-if="post.readingTime">{{ post.readingTime }}</span>
    </div>
  </NuxtLink>
</template>
