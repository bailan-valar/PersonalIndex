<script setup lang="ts">
// Get featured projects from content
const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects')
    .where('featured', '=', true)
    .order('date', 'DESC')
    .all()
)

const sectionContent = {
  title: '精选项目',
  description: '一些我引以为豪的作品',
  viewAll: { label: '查看全部项目', to: '/projects' },
  empty: '即将推出更多精彩项目...',
}
</script>

<template>
  <section class="section">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="mb-2">{{ sectionContent.title }}</h2>
          <p class="text-text-muted">{{ sectionContent.description }}</p>
        </div>
        <NuxtLink
          v-if="projects && projects.length > 0"
          :to="sectionContent.viewAll.to"
          class="btn btn-secondary"
        >
          {{ sectionContent.viewAll.label }}
          <Icon name="ph:arrow-right" class="ml-2" />
        </NuxtLink>
      </div>

      <!-- Projects Grid -->
      <div v-if="projects && projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.path"
          :project="project"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <Icon name="ph:hammer-duotone" class="text-6xl text-text-muted mx-auto mb-4" />
        <p class="text-text-muted">{{ sectionContent.empty }}</p>
      </div>
    </div>
  </section>
</template>
