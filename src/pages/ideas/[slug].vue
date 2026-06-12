<script setup lang="ts">
const route = useRoute()

// Fetch the blog post
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryCollection('blog')
    .path(`/ideas/${route.params.slug}`)
    .first()
)

// Handle 404
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

// Get related posts
const { data: relatedPosts } = await useAsyncData('related-posts', () =>
  queryCollection('blog')
    .where('path', '<>', post.value?.path)
    .order('date', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <article class="section">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <!-- Back Button -->
        <NuxtLink to="/ideas" class="inline-flex items-center text-text-muted hover:text-primary mb-8 transition-colors">
          <Icon name="ph:arrow-left" class="mr-2" />
          返回想法列表
        </NuxtLink>

        <!-- Article Header -->
        <header class="mb-8">
          <h1 class="mb-4">{{ post?.title }}</h1>
          <p class="text-xl text-text-muted mb-4">{{ post?.description }}</p>

          <div class="flex items-center space-x-4 text-sm text-text-muted">
            <span v-if="post?.date">
              <Icon name="ph:calendar-duotone" class="mr-1" />
              {{ new Date(post.date).toLocaleDateString('zh-CN') }}
            </span>
            <span v-if="post?.tags && post.tags.length > 0">
              <Icon name="ph:tag-duotone" class="mr-1" />
              {{ post.tags.join(', ') }}
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none mb-12">
          <ContentRenderer :value="post" />
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts && relatedPosts.length > 0" class="pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 class="text-xl font-semibold mb-6">相关想法</h3>
          <div class="grid sm:grid-cols-3 gap-6">
            <BlogCard
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.path"
              :post="relatedPost"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
