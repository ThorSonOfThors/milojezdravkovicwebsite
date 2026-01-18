<template>
  <section
    ref="section"
    class="parallax"
    :style="bgStyle"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  image: string
  speed?: number
}>()

const section = ref<HTMLElement | null>(null)
const offset = ref(0)

const handleScroll = () => {
  if (!section.value) return

  const rect = section.value.getBoundingClientRect()
  offset.value = rect.top * (props.speed ?? 0.3)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const bgStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundPosition: `center ${offset.value}px`
}))
</script>

<style scoped>
.parallax {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
