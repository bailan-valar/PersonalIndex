<script setup lang="ts">
const route = useRoute()

// Fetch the project
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryContent(`/projects/${route.params.slug}`).findOne()
)

// Handle 404
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// Get related projects
const { data: relatedProjects } = await useAsyncData('related-projects', () =>
  queryContent('/projects')
    .where({ _path: { $ne: project.value?._path } })
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>

<template>
  <div class="section">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <NuxtLink to="/projects" class="inline-flex items-center text-text-muted hover:text-primary mb-8 transition-colors">
          <Icon name="ph:arrow-left" class="mr-2" />
          返回项目列表
        </NuxtLink>

        <!-- Project Header -->
        <header class="mb-8">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <h1 class="mb-0">{{ project?.title }}</h1>
            <div class="flex items-center space-x-2">
              <a
                v-if="project?.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <Icon name="ph:arrow-square-out" class="mr-2" />
                查看演示
              </a>
              <a
                v-if="project?.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                <Icon name="ph:github-logo" class="mr-2" />
                源码
              </a>
            </div>
          </div>

          <p class="text-xl text-text-muted mb-4">{{ project?.description }}</p>

          <div class="flex items-center space-x-4 text-sm text-text-muted">
            <span v-if="project?.date">
              <Icon name="ph:calendar-duotone" class="mr-1" />
              {{ new Date(project.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' }) }}
            </span>
            <span v-if="project?.tags && project.tags.length > 0">
              <Icon name="ph:tag-duotone" class="mr-1" />
              {{ project.tags.join(', ') }}
            </span>
          </div>
        </header>

        <!-- Project Image -->
        <div v-if="project?.thumbnail" class="rounded-lg overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full"
            loading="lazy"
          />
        </div>

        <!-- Project Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none mb-12">
          <ContentRenderer :value="project" />
        </div>

        <!-- Related Projects -->
        <div v-if="relatedProjects && relatedProjects.length > 0" class="pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 class="text-xl font-semibold mb-6">相关项目</h3>
          <div class="grid sm:grid-cols-3 gap-6">
            <ProjectCard
              v-for="relatedProject in relatedProjects"
              :key="relatedProject._path"
              :project="relatedProject"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
