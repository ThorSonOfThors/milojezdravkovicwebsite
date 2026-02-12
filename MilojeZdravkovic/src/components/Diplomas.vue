<template>
  <section class="diplomas" id="diplomas">
    <h2>Diplomas</h2>

    <div class="grid">
      <div
        v-for="diploma in diplomas"
        :key="diploma.id"
        class="card"
        :data-id="diploma.id"
        @click="openPDF(diploma.pdf)"
      >
        <canvas :id="`pdf-canvas-${diploma.id}`"></canvas>
        <p>{{ diploma.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

interface Diploma {
  id: number
  title: string
  pdf: string
}

const diplomas: Diploma[] = [
  { id: 1, title: 'Diploma 1', pdf: '/diplomas/diploma1.pdf' },
  { id: 2, title: 'Diploma 2', pdf: '/diplomas/diploma2.pdf' },
  { id: 3, title: 'Diploma 3', pdf: '/diplomas/diploma3.pdf' },
  { id: 4, title: 'Diploma 4', pdf: '/diplomas/diploma4.pdf' },
  { id: 5, title: 'Diploma 5', pdf: '/diplomas/diploma5.pdf' },
  { id: 6, title: 'Diploma 6', pdf: '/diplomas/diploma6.pdf' },
  { id: 7, title: 'Diploma 7', pdf: '/diplomas/diploma7.pdf' },
  { id: 8, title: 'Diploma 8', pdf: '/diplomas/diploma8.pdf' },
  { id: 9, title: 'Diploma 9', pdf: '/diplomas/diploma10.pdf' },
  { id: 10, title: 'Diploma 10', pdf: '/diplomas/diploma11.pdf' },
  // add all 20+ here
]

const rendered = new Set<number>()

async function renderThumbnail(pdfUrl: string, canvas: HTMLCanvasElement) {
  console.log("Loading PDF:", pdfUrl)

  const loadingTask = pdfjsLib.getDocument(pdfUrl)
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)

  const viewport = page.getViewport({ scale: 0.5 })
  const context = canvas.getContext('2d')
  if (!context) return

  canvas.width = viewport.width
  canvas.height = viewport.height

  await page.render({
    canvasContext: context,
    viewport: viewport
  } as any).promise

  console.log("Rendered:", pdfUrl)
}


function openPDF(url: string) {
  window.open(url, '_blank')
}

onMounted(async () => {
  await nextTick()

  const observer = new IntersectionObserver(
    async (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        const card = entry.target as HTMLElement
        const id = Number(card.dataset.id)

        if (rendered.has(id)) continue
        rendered.add(id)

        const canvas = document.getElementById(
          `pdf-canvas-${id}`
        ) as HTMLCanvasElement | null

        const diploma = diplomas.find(d => d.id === id)

        if (canvas && diploma) {
          await renderThumbnail(diploma.pdf, canvas)
        }

        observer.unobserve(card)
      }
    },
    {
      root: null,
      threshold: 0.2
    }
  )

  document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card)
  })
})
</script>


<style scoped>
.diplomas {
  padding: 3rem 1rem;
  text-align: center;
  font-size: 36.ch;
  font-size: 1.3rem;
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 500;
  margin-bottom: 3rem;
}




/* Horizontal row */
.grid {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
  overflow-x: auto; /* allows scroll if too many diplomas */
  padding-bottom: 1rem;
  
}

/* Smaller card */
.card {
  background: white;
  border-radius: 10px;
  padding: 0.8rem;
  cursor: pointer;
  transition: 0.3s ease;
  width: 160px;       /* fixed smaller width */
  flex-shrink: 0;     /* prevents shrinking */
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.card:hover {
  transform: translateY(-6px);
}

/* Canvas (PDF preview) */
canvas {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
}

/* Title */
p {
  margin-top: 0.8rem;
  font-weight: 600;
  font-size: 0.85rem;
}
</style>

