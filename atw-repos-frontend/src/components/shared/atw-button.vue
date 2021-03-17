<template>
<button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "atw-button",
  props: ['text']
}
</script>

<style scoped lang="scss">

.button {
  background: #EF0044;
  @apply m-2 p-4 rounded-xl text-white font-semibold
}

</style>