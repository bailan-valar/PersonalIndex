<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const onBackdropClick = (e: MouseEvent) => {
  if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
    emit('close')
  }
}

// Close on Escape key
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

// Prevent body scroll when modal is open
watch(() => props.show, (show) => {
  if (import.meta.client) {
    if (show) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
        @click="onBackdropClick"
      >
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-if="show"
            class="relative bg-surface rounded-xl shadow-2xl max-w-md w-full p-6"
            @click.stop
          >
            <!-- Close button -->
            <button
              @click="emit('close')"
              class="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="关闭"
            >
              <Icon name="ph:x" class="text-xl" />
            </button>

            <!-- Content -->
            <div class="text-center">
              <h3 class="text-lg font-semibold mb-4">扫码添加微信</h3>
              <img
                src="/images/person/wechat.jpg"
                alt="微信二维码"
                class="w-64 h-64 mx-auto rounded-lg shadow-md"
              />
              <p class="mt-4 text-sm text-text-muted">
                使用微信扫描上方二维码添加好友
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
