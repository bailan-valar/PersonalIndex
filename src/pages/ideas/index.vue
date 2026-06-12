<script setup lang="ts">
// Get all ideas
const { data: ideas } = await useAsyncData('ideas', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div class="section">
    <div class="container-custom">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="mb-2">想法</h1>
        <p class="text-text-muted">记录思考与灵感</p>
      </div>

      <!-- Ideas Grid -->
      <div v-if="ideas && ideas.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard
          v-for="idea in ideas"
          :key="idea._path"
          :post="idea"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <Icon name="ph:lightbulb-duotone" class="text-6xl text-text-muted mx-auto mb-4" />
        <p class="text-text-muted">想法正在酝酿中...</p>
      </div>
    </div>
  </div>
</template>
