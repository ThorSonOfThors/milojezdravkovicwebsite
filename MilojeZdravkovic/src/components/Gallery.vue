<template>
  <section class="gallery" id="gallery">

    <!-- Parallax header -->
    <ParallaxSection
      image="/icon.jpg"
      :speed="0.3"
      class="gallery-parallax"
    >
      <h2>Achievements</h2>
    </ParallaxSection>

    <!-- Gallery grid -->
    <div class="gallery-wrapper">
      <div
        class="card"
        v-for="(img, index) in images"
        :key="img.id"
        @click="open(index)"
      >
        <div class="img-container">
          <img :src="img.src" :alt="img.title" />
        </div>
        <h3>{{ img.title }}</h3>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="activeIndex !== null"
      class="modal"
      @click.self="activeIndex = null"
    >
      <div class="modal-content">
        <button class="nav left" @click.stop="prev">‹</button>

        <div class="img-container modal-img">
          <img :src="activeImg?.src" :alt="activeImg?.title" />
        </div>

        <div class="info">
          <h2>{{ activeImg?.title }}</h2>
          <p>{{ activeImg?.desc }}</p>
        </div>

        <button class="nav right" @click.stop="next">›</button>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ParallaxSection from './ParallaxSection.vue'

const activeIndex = ref<number | null>(null)

/* Your images here */
const images = [
  { id: 1, src: '/images/award1.jpg', title: 'Championship', desc: 'Won first place in competition' },
  { id: 2, src: '/images/award2.jpg', title: 'Certificate', desc: 'Completed professional course' },
  { id: 3, src: '/images/award3.jpg', title: 'Achievement', desc: 'Special recognition award' },
  { id: 4, src: '/images/award4.jpg', title: 'Special Award', desc: 'Awarded for excellence' }
]

const activeImg = computed(() => {
  if (activeIndex.value === null) return null
  return images[activeIndex.value]
})

function open(index: number) {
  activeIndex.value = index
}

function prev() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
}

function next() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % images.length
}
</script>

<style scoped>
/* Header */
.gallery {
  padding: 0;
}

.gallery-parallax {
  height: 40vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background-position: center;
  background-size: cover; /* normal cover */
  background-repeat: no-repeat;
}

.gallery-parallax h2 {
  color:white;
  font-size:3rem;
}

/* Gallery grid */
.gallery-wrapper {
  padding:2rem;
  display:flex;
  flex-wrap: wrap;
  gap:1rem;
  justify-content: center;
  overflow-x: hidden;
}

/* Cards */
.card {
  width: calc(33.333% - 1rem);
  min-height: 250px;
  background:#f3f3f3;
  padding:1rem;
  text-align:center;
  border-radius:10px;
  cursor:pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* smooth hover animation */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.img-container {
  width:100%;
  height:200px;
  overflow:hidden;
  border-radius:8px;
}

.img-container img {
  width:100%;
  height:100%;
  object-fit:cover;
}

.card h3 {
  margin-top:.5rem;
  font-size:1rem;
  font-weight:500;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  position: relative;
  background: white;
  width: 80%;
  max-width: 900px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  max-height: 75vh; /* Consistent with height */
  height: 95vh; /* Or use 100vh for full screen */
}

.modal-img {
  width: 60%;
  height: 100%;
  object-fit: contain; /* Shows entire image without cropping */
}

/* Info panel */
.info {
  width:40%;
  padding:2rem;
  background:rgba(0,0,0,.5);
  color:white;
  overflow-y:auto;
}

.info h2 {
  margin-bottom:1rem;
  font-size:1.5rem;
}

.info p {
  font-size:1rem;
}

/* Navigation buttons */
.nav {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  font-size:2rem;
  color:white;
  background:rgba(0,0,0,.5);
  border:none;
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: all 0.3s ease;
  z-index:1001;
}

.nav:hover {
  background:rgba(0,0,0,.8);
  transform:translateY(-50%) scale(1.1);
}

.nav.left {
  left:10px;
}

.nav.right {
  right:10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-wrapper .card {
    width: calc(50% - 0.5rem);
  }

  .img-container {
    height: 150px;
  }

  .modal-img {
    width: 55%;
    height: 140%;
  }

  .modal-content{
    max-height: 200px;
  }

  .info {
    width: 45%;
    padding: 1rem;
  }

  .info h2 {
    font-size:1.2rem;
  }

  .info p {
    font-size:0.9rem;
  }

  .nav {
    width:40px;
    height:40px;
    font-size:1.5rem;
  }
}

@media (max-width: 450px) {


  .modal-content{
    max-height: 120px;
  }

  .modal-img{
    width: 55%;
    height: 150;
  }

  .gallery-wrapper .card {
    width: calc(50% - 0.5rem);
  }

  .img-container {
    height: 120px;
  }

  /* Parallax size adjustment */
  .gallery-parallax {
    height: 25vh;
    background-size: contain; /* scale down background image to fit */
  }

  .gallery-parallax h2 {
    font-size:1.5rem;
  }

  .info {
    padding:0.8rem;
  }

  .info h2 {
    font-size:1rem;
  }

  .info p {
    font-size:0.8rem;
  }

  .nav {
    width:30px;
    height:30px;
    font-size:1.2rem;
  }
}
</style>
