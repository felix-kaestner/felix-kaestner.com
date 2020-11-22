<template>
  <div class="container">
    <h1 class="title">{{ page.title }}</h1>
    <p class="subtitle">My name is Felix Kästner</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>

<style>
.container {
  padding: 5vh 10vw;
  display: flex;
  flex-direction: column;
}

.subtitle {
  font-size: 1.2em;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
}
</style>
