<template>
  <section class="hero" id="hero">
    <div class="overlay">
      <h1>Miloje Zdravković</h1>
      <p>Collonel of Serbian Army</p>

      <a
        href="/public/cv.pdf"
        download
        class="btn"
      >
        Download CV
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  height: 100vh;
  background: url('C:\Users\Filip\Desktop\Cale\public\MilojeZ.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 4rem;
  position: relative;
}

/* Dark overlay for readability */
.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 3rem;
  border-radius: 12px;
  color: white;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 24px;
  background: white;
  color: black;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  transition: 0.3s;
}

.btn:hover {
  opacity: 0.8;
}
</style>
