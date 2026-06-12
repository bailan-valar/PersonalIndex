<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: '关于 - 迪恩',
  description: config.author.tagline,
})
</script>

<template>
  <div class="section">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="mb-2">关于我</h1>
          <p class="text-xl text-text-muted italic">"{{ config.author.tagline }}"</p>
        </div>

        <!-- Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p>
            你好，我是 <strong>{{ config.author.name }}</strong>，一名{{ config.author.title }}。
          </p>

          <p>
            作为一个 <strong>{{ config.author.personality }}</strong>，我天生对人的内心世界和深层意义感兴趣。这种性格特质也反映在我的开发方式上——我不仅关注代码的功能性，更思考它对用户的实际意义和价值。
          </p>

          <h2>我的理念</h2>
          <p>
            "少即是多"。我相信好的产品应该专注于解决核心问题，而不是堆砌功能。每一个项目都是一次将想法变为现实的旅程，我享受这个过程。
          </p>

          <h2>数字游民梦想</h2>
          <p>
            我梦想成为一名数字游民，在世界各地一边旅行一边工作。相信技术的发展应该让我们的生活更自由，而不是被束缚在固定的地方。
          </p>

          <h2>联系方式</h2>
          <p>
            如果你有有趣的想法想讨论，或者想聊聊独立开发/数字游民，欢迎通过以下方式联系我：
          </p>

          <ul>
            <li v-if="config.social.github">
              <a :href="config.social.github" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li v-if="config.social.twitter">
              <a :href="config.social.twitter" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>

          <p>
            期待与你的交流！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
