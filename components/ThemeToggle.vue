<template>
  <div>
    <SunIcon class="theme-toggle light" @click="toggleLightMode" />
    <MoonIcon class="theme-toggle dark" @click="toggleDarkMode" />
  </div>
</template>

<script>
import SunIcon from '~/assets/icons/sun.svg?inline'
import MoonIcon from '~/assets/icons/moon.svg?inline'

export default {
  components: {SunIcon, MoonIcon},
  methods: {
    toggleLightMode() {
      this.$nuxt.$colorMode.preference = 'light'
    },
    toggleDarkMode() {
      this.$nuxt.$colorMode.preference = 'dark'
    },
  },
}
</script>

<style>
.theme-toggle {
  position: absolute;
  top: 7.5%;
  right: 7.5%;
  cursor: pointer;
  animation: 1s appear;
  transition: opacity 150ms ease;
}

@media only screen and (max-width: 768px) {
  .theme-toggle {
    top: 5%;
  }
}

.light-mode .light {
  opacity: 0;
  pointer-events: none;
}

.dark-mode .dark {
  opacity: 0;
  pointer-events: none;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
