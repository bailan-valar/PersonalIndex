<script setup lang="ts">
const route = useRoute()

// Fetch the project
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryCollection('projects')
    .path(`/projects/${route.params.slug}`)
    .first()
)

// Handle 404
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// Get related projects
const { data: relatedProjects } = await useAsyncData('related-projects', () =>
  queryCollection('projects')
    .where('path', '<>', project.value?.path)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

// 目录数据（仅在有标题时显示左侧悬浮目录）
const toc = computed(() => project.value?.body?.toc ?? null)
const hasToc = computed(() => !!toc.value?.links?.length)
</script>

<template>
  <div class="section">
    <div class="container-custom">
      <div class="flex justify-center gap-12">
        <!-- 左侧悬浮目录（xl 及以上显示） -->
        <aside v-if="hasToc" class="hidden xl:block w-60 shrink-0">
          <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <TableOfContents :toc="toc" />
          </div>
        </aside>

        <article class="w-full max-w-3xl">
          <!-- Back Button -->
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary-500 mb-8 transition-colors"
          >
            <Icon name="ph:arrow-left" />
            返回项目列表
          </NuxtLink>

          <!-- Project Header -->
          <header class="mb-10">
            <!-- Eyebrow: date + tags -->
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
              <span v-if="project?.date" class="inline-flex items-center text-sm text-text-muted">
                <Icon name="ph:calendar-duotone" class="mr-1.5" />
                {{ new Date(project.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' }) }}
              </span>
              <div v-if="project?.tags && project.tags.length > 0" class="flex flex-wrap items-center gap-1.5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
  
            <h1 class="text-balance mb-4">{{ project?.title }}</h1>
  
            <p class="text-xl text-text-muted text-pretty leading-relaxed mb-6">
              {{ project?.description }}
            </p>
  
            <!-- Actions -->
            <div v-if="project?.liveUrl || project?.githubUrl" class="flex flex-wrap gap-3">
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
          </header>
  
          <!-- Project Image -->
          <div
            v-if="project?.thumbnail"
            class="rounded-xl overflow-hidden mb-10 border border-gray-200/70 dark:border-gray-800 shadow-sm bg-gray-100 dark:bg-gray-800"
          >
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full"
              loading="lazy"
            />
          </div>
  
          <!-- Project Content -->
          <div class="prose max-w-none mb-12" data-toc-content>
            <ContentRenderer :value="project" />
          </div>
  
          <!-- Related Projects -->
          <div
            v-if="relatedProjects && relatedProjects.length > 0"
            class="pt-10 border-t border-gray-200 dark:border-gray-800"
          >
            <h3 class="text-xl font-semibold mb-6">相关项目</h3>
            <div class="grid sm:grid-cols-3 gap-5">
              <ProjectCard
                v-for="relatedProject in relatedProjects"
                :key="relatedProject.path"
                :project="relatedProject"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
