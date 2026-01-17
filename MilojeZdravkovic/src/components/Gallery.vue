<template>
  <section class="gallery" id="gallery">
    <h2>Achievements</h2>

    <div class="grid">
      <div class="card" v-for="n in totalImages" :key="n">
        <img :src="`/images/award${n}.jpg`" loading="lazy" />
        <p>Picture {{ n }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const totalImages = 3 // change based on how many images you have
</script>
<style scoped>
.gallery {
  padding: 5rem 4rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #f3f3f3;
  padding: 1rem;
  text-align: center;
  overflow: hidden; /* IMPORTANT */
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* keeps ratio */
  border-radius: 6px;
}

</style>
