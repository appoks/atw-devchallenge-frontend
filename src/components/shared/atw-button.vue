<template>
  <span class="button">{{ text }}</span>
</template>

<script>
export default {
  name: "atw-button",
  props: ['text']
}
</script>

<style scoped lang="css">

.button {
  background: #EF0044;
  @apply m-2 p-4 rounded-xl text-white font-semibold
}

.button:hover {
  cursor: pointer;
}

</style>