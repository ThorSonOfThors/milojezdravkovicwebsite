<template>
  <section class="hero" id="hero">
    <div class="overlay">
      <h1>Miloje Zdravković</h1>
      <p>Colonel of Serbian Army</p>

      <a href="../../public/MILOJE ZDRAVKOVIC.pdf" download class="btn">
        Download CV
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  height: 100vh;
  background: url('/MZ.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* default align overlay left on desktop */
  padding: 4rem;
  position: relative;
}

/* Dark overlay for readability */
.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 3rem;
  border-radius: 12px;
  color: rgb(255, 255, 255);
  max-width: 600px;
}

/* Button styling */
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: 2rem;
    justify-content: center; /* center overlay on smaller screens */
  }

  .overlay {
    padding: 2rem;
    width: 90%;
    max-width: none;
    text-align: center;
    margin-top: 50px;
  }

  .overlay h1 {
    font-size: 2rem;
  }

  .overlay p {
    font-size: 1rem;
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 45vh; /* reduce height on very small screens */
  }

  .overlay h1 {
    font-size: 1.5rem;
  }

  .overlay p {
    font-size: 0.9rem;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
}
</style>
