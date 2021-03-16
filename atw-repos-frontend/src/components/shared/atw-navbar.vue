<template>
  <div id="nav">
    <span>
      <p class="brand">Ateliware Dev Challenge</p>
    </span>
    <span>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </span>

    <span>
      <p class="name"> Johnathan Radünz Nunes</p>
    </span>
  </div>
</template>

<script>
export default {
name: "atw-navbar"
}
</script>

<style scoped lang="scss">


#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #EF0044;
  border-top: 3px solid #313335;
  border-bottom: 1px solid #313335;
  color: white;


    a {
    font-weight: bold;
      color: white;

    &.router-link-exact-active {
      color: #313335;
      text-decoration: underline #313335 2px;

    }
  }
}

.name, .brand {
  font-weight: bold;
}

</style>