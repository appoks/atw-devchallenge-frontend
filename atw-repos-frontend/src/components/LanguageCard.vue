<template>

  <article class="langCard">
    <p>
      <strong>
        {{ lang_name }}
      </strong>
    </p>
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
  border-radius: 10px;
  background-color: whitesmoke;
  font-weight: bold;
  border: 1px solid white;
  vertical-align: center;
}

@media (min-width: 300px)
{
  .langCard {
    height: 34px;
    padding: 5px;
  }
}

@media (min-width: 500px)
{
  .langCard {
    width: 100px;
    height: 64px;
    padding: 20px;
  }
}
@media (min-width: 1024px)
{
  .langCard {
    width: 200px;
    height: 64px;
  }
}

</style>