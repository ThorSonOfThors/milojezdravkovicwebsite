<template>
  <nav class="navbar">
    <div class="logo">Miloje Zdravković</div>

    <ul>
      <li><a href="#hero" @click.prevent="scrollTo('#hero')">Home</a></li>
      <li><a href="#about" @click.prevent="scrollTo('#about')">About</a></li>
      <li><a href="#timeline" @click.prevent="scrollTo('#timeline')">Timeline</a></li>
      <li><a href="#diplomas" @click.prevent="scrollTo('#diplomas')">Diplomas</a></li>
      <li><a href="#gallery" @click.prevent="scrollTo('#gallery')">Gallery</a></li>
      <li><a href="#contact" @click.prevent="scrollTo('#contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { lenis } from '../main'

// Set your navbar height here if it's fixed
const NAVBAR_HEIGHT = 70 // adjust if your navbar is taller

function scrollTo(target: string) {
  const el = document.querySelector<HTMLElement>(target)
  if (!el) return

  // Get the section's top position relative to the document
  const offsetTop = el.offsetTop - NAVBAR_HEIGHT

  lenis.scrollTo(offsetTop, {
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
  background: rgba(17, 17, 17, 0.8); /* more transparent */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; /* smaller padding for mobile */
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap; /* allow wrapping */
  justify-content: space-between;
  align-items: center;



}

/* Logo */
.logo {
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* Nav items */
ul {
  display: flex;
  list-style: none;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}


/* Make items scrollable horizontally on very small screens */
@media (max-width: 500px) {
  ul {
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  ul::-webkit-scrollbar {
    display: none;
  }
}

li {
  flex-shrink: 0;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap; /* prevent breaking text */
}

a:hover {
  opacity: 0.7;
}
</style>
