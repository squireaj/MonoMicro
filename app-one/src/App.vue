<template>
  <div class="mf-Container">
    <h1>App One</h1>
    <VasionButton :classProp="'primary'" @clicked="moveToRequest">App 1 Route 2</VasionButton>
    <VasionButton :classProp="'primary'" @clicked="moveToAppTwo">App 2</VasionButton>
    <router-view to="/" :key="$route.fullPath"/>
  </div>
</template>

<script>

export default {
  name: 'AppOne',
  methods: {
    moveToRequest() {
      console.log("working?")
      this.$router.push({ name: 'TheRequest' })
    },
    moveToAppTwo() {
      console.log("working?")
      this.$router.push({ path: '/app-two' })
    }
  }
}
</script>
