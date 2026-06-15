<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

interface Toc {
  links?: TocLink[]
}

const props = defineProps<{
  toc?: Toc | null
}>()

// 将嵌套的 toc.links 扁平化为 h2/h3 列表，保留层级信息
interface FlatItem {
  id: string
  text: string
  depth: number
}

const flatItems = computed<FlatItem[]>(() => {
  const result: FlatItem[] = []
  const walk = (links?: TocLink[]) => {
    links?.forEach((link) => {
      if (link.depth === 2 || link.depth === 3) {
        result.push({ id: link.id, text: link.text, depth: link.depth })
      }
      if (link.children?.length) walk(link.children)
    })
  }
  walk(props.toc?.links)
  return result
})

const hasItems = computed(() => flatItems.value.length > 0)

// Scroll spy —— 高亮当前可视区域对应的标题
const activeId = ref<string>('')
let ticking = false
let cachedIds: string[] = []

const HEADER_OFFSET = 96 // 6rem，与 prose 标题的 scroll-margin-top 对齐

const updateActive = () => {
  const scrollPos = window.scrollY + HEADER_OFFSET
  let current = ''
  for (const id of cachedIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top + window.scrollY
    if (top <= scrollPos) {
      current = id
    } else {
      break
    }
  }
  // 滚动到底部时激活最后一项
  if (!current && cachedIds.length) {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
    if (atBottom) current = cachedIds[cachedIds.length - 1]
  }
  if (current) activeId.value = current
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    updateActive()
  })
}

// 点击锚点 —— 手动平滑滚动，避开 fixed header
const onLinkClick = (id: string, event: MouseEvent) => {
  event.preventDefault()
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  activeId.value = id
}

let observer: MutationObserver | null = null

onMounted(() => {
  cachedIds = flatItems.value.map((item) => item.id)
  // 内容渲染是异步的，等 DOM 稳定后再缓存一次 id
  nextTick(() => {
    cachedIds = flatItems.value.map((item) => item.id)
    updateActive()
  })
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })

  // 兜底：监听内容区 DOM 变化，重新收集 id
  const content = document.querySelector('[data-toc-content]')
  if (content) {
    observer = new MutationObserver(() => {
      cachedIds = flatItems.value.map((item) => item.id)
      updateActive()
    })
    observer.observe(content, { childList: true, subtree: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  observer?.disconnect()
})

defineExpose({ hasItems })
</script>

<template>
  <nav v-if="hasItems" aria-label="页面目录" class="toc">
    <p class="toc-title">目录</p>
    <ul class="toc-list">
      <li v-for="item in flatItems" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="toc-link"
          :class="{
            'toc-link-active': activeId === item.id,
            'toc-sublink': item.depth === 3,
          }"
          :title="item.text"
          @click="onLinkClick(item.id, $event)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  font-size: 0.875rem;
}

.toc-title {
  @apply text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 pl-3.5;
}

.toc-list {
  @apply space-y-0 border-l border-gray-200/80 dark:border-gray-800;
}

.toc-link {
  @apply block truncate py-1.5 pl-3.5 -ml-px text-text-muted transition-all duration-200;
  border-left: 2px solid transparent;
}

.toc-link:hover {
  @apply text-text translate-x-0.5;
}

.toc-sublink {
  @apply pl-6 text-[0.8125rem] py-1;
}

.toc-link-active {
  @apply text-primary-600 dark:text-primary-400 font-medium translate-x-0;
  border-left-color: rgb(var(--color-primary));
}

.toc-link-active:hover {
  @apply text-primary-600 dark:text-primary-400;
}
</style>
