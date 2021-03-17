<template>
  <div id="app">
    <atw-navbar/>
      <router-view/>
    <atw-footer/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313335;
}

strong {
  font-weight: bold;
  color: #EF0044;
}

</style>
<script>
import AtwNavbar from "@/components/shared/atw-navbar";
import AtwFooter from "@/components/shared/atw-footer";
export default {
  components: {AtwFooter, AtwNavbar}
}
</script>