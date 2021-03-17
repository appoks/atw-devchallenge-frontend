<template>

  <article class="langCard">
    <strong>
    {{ lang_name }}
    </strong>
  </article>


</template>

<script>
export default {
  name: "LanguageCard",
  props: ['lang_name']
}
</script>

<style scoped lang="scss">

.langCard {
  padding: 24px;
  height: 64px;
  width: 200px;
  vertical-align: center;
  border-radius: 10px;
  background-color: whitesmoke;
  font-weight: bold;
  border: 1px solid white;
}

</style>