<script setup lang="ts">
// Get latest ideas from content
const { data: ideas } = await useAsyncData('latest-ideas', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const sectionContent = {
  title: '最新想法',
  description: '记录思考与灵感',
  viewAll: { label: '查看更多想法', to: '/ideas' },
  empty: '想法正在酝酿中...',
}
</script>

<template>
  <section class="section bg-surface">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="mb-2">{{ sectionContent.title }}</h2>
          <p class="text-text-muted">{{ sectionContent.description }}</p>
        </div>
        <NuxtLink
          v-if="ideas && ideas.length > 0"
          :to="sectionContent.viewAll.to"
          class="btn btn-secondary"
        >
          {{ sectionContent.viewAll.label }}
          <Icon name="ph:arrow-right" class="ml-2" />
        </NuxtLink>
      </div>

      <!-- Ideas Grid -->
      <div v-if="ideas && ideas.length > 0" class="grid md:grid-cols-3 gap-6">
        <BlogCard
          v-for="idea in ideas"
          :key="idea.path"
          :post="idea"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <Icon name="ph:lightbulb-duotone" class="text-6xl text-text-muted mx-auto mb-4" />
        <p class="text-text-muted">{{ sectionContent.empty }}</p>
      </div>
    </div>
  </section>
</template>
