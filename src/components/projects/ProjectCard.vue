<script setup lang="ts">
interface Project {
  _path?: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
  thumbnail?: string
  liveUrl?: string
  githubUrl?: string
}

const props = defineProps<{
  project: Project
}>()

const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })
}
</script>

<template>
  <NuxtLink
    v-if="project._path"
    :to="project._path"
    class="card group hover:border-primary/50 transition-all duration-300"
  >
    <!-- Thumbnail -->
    <div v-if="project.thumbnail" class="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
      {{ project.title }}
    </h3>

    <!-- Description -->
    <p class="text-text-muted text-sm mb-4 line-clamp-2">
      {{ project.description }}
    </p>

    <!-- Tags -->
    <div v-if="project.tags && project.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in project.tags.slice(0, 3)"
        :key="tag"
        class="text-xs px-2 py-1 rounded-full bg-primary-500/10 text-primary-500"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between text-sm text-text-muted">
      <span v-if="project.date">{{ formatDate(project.date) }}</span>
      <div class="flex items-center space-x-2">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary-500 transition-colors"
          @click.stop
        >
          <Icon name="ph:arrow-square-out" class="text-lg" />
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary-500 transition-colors"
          @click.stop
        >
          <Icon name="ph:github-logo" class="text-lg" />
        </a>
      </div>
    </div>
  </NuxtLink>
</template>
