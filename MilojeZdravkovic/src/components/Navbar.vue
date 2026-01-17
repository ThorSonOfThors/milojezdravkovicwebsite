<template>
  <nav class="navbar">
    <div class="logo">Miloje Zdravković</div>

    <ul>
      <li>
        <a href="#hero" @click.prevent="scrollTo('#hero')">Home</a>
      </li>
      <li>
        <a href="#about" @click.prevent="scrollTo('#about')">About</a>
      </li>
      <li>
        <a href="#timeline" @click.prevent="scrollTo('#timeline')">Timeline</a>
      </li>
      <li>
        <a href="#gallery" @click.prevent="scrollTo('#gallery')">Gallery</a>
      </li>
      <li>
        <a href="#contact" @click.prevent="scrollTo('#contact')">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { lenis } from '../main'

function scrollTo(target: string) {
  lenis.scrollTo(target, {
    duration: 1.2,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(17, 17, 17, 0.9);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  opacity: 0.7;
}
</style>
