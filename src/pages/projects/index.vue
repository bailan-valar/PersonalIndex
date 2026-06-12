<script setup lang="ts">
// Get all projects
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects')
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div class="section">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="mb-2">项目</h1>
        <p class="text-text-muted">一些我引以为豪的作品</p>
      </div>

      <!-- Projects Grid -->
      <div v-if="projects && projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project._path"
          :project="project"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <Icon name="ph:hammer-duotone" class="text-6xl text-text-muted mx-auto mb-4" />
        <p class="text-text-muted">项目正在开发中...</p>
      </div>
    </div>
  </div>
</template>
