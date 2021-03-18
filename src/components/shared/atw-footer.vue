<template>
  <div class="footer">
      <p class="brand footer-text">
        Ateliware Dev Challenge
      </p>
      <p class="year footer-text">
        2021
      </p>
      <p class="name footer-text">
       Johnathan Radünz Nunes
      </p>

  </div>
</template>

<script>
export default {
name: "atw-footer"
}
</script>

<style scoped>

.footer {
  @apply container mx-auto flex flex-row justify-center
}

.footer-text {
  @apply text-black text-center
}

.year, .name, .brand {

  @apply p-2 m-2
}

</style>