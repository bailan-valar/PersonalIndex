<script setup lang="ts">
const skills = [
  { name: 'Vue.js / Nuxt', icon: 'ph:code-duotone', level: 'advanced' },
  { name: 'TypeScript', icon: 'ph:brackets-curly-duotone', level: 'advanced' },
  { name: 'Node.js', icon: 'ph:hard-drives-duotone', level: 'intermediate' },
  { name: 'Python', icon: 'ph:terminal-window-duotone', level: 'intermediate' },
  { name: 'UI/UX Design', icon: 'ph:paint-brush-duotone', level: 'intermediate' },
  { name: 'DevOps', icon: 'ph:cloud-duotone', level: 'learning' },
]

const aboutContent = {
  title: '关于我',
  description: `作为一名 INFJ 独立开发者，我热衷于将创意转化为现实。我相信技术应该服务于人，而不是相反。

  我的开发理念是"少即是多"——专注于核心价值，避免过度工程化。每一个项目都是一次将想法变为现实的旅程。

  当我不写代码时，你可能发现我在研究新的技术趋势，规划下一次数字游民之旅，或者只是在思考如何让这个世界变得更有趣一点。`,
  interests: [
    { icon: 'ph:laptop-duotone', label: '独立开发' },
    { icon: 'ph:globe-hemisphere-west-duotone', label: '数字游民' },
    { icon: 'ph:lightbulb-duotone', label: '创意实现' },
    { icon: 'ph:book-open-duotone', label: '持续学习' },
  ],
}
</script>

<template>
  <section class="section bg-surface">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- About Text -->
        <div>
          <h2 class="mb-6">{{ aboutContent.title }}</h2>
          <p class="text-lg text-text-muted leading-relaxed whitespace-pre-line mb-8">
            {{ aboutContent.description }}
          </p>

          <!-- Interests -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="interest in aboutContent.interests"
              :key="interest.label"
              class="flex flex-col items-center p-4 rounded-lg bg-background"
            >
              <Icon :name="interest.icon" class="text-3xl text-primary-500 mb-2" />
              <span class="text-sm text-text-muted">{{ interest.label }}</span>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div>
          <h3 class="text-xl font-semibold mb-6">技术栈</h3>
          <div class="space-y-4">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="flex items-center space-x-4 p-3 rounded-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div class="flex-shrink-0">
                <Icon :name="skill.icon" class="text-2xl text-primary-500" />
              </div>
              <div class="flex-1">
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <div class="flex-shrink-0">
                <span
                  class="text-xs px-2 py-1 rounded-full"
                  :class="{
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': skill.level === 'advanced',
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': skill.level === 'intermediate',
                    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200': skill.level === 'learning',
                  }"
                >
                  {{ skill.level === 'advanced' ? '熟练' : skill.level === 'intermediate' ? '掌握' : '学习中' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
