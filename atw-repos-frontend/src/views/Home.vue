<template>
  <div class="home">


    <p>
      Linguagens...
    </p>
    <div class="langsDisplay">
      <language-card lang_name="Ruby"/>
      <language-card lang_name="Vue.js"/>
      <language-card lang_name="Elixir"/>
      <language-card lang_name="C#"/>
      <language-card lang_name="Rust"/>
    </div>

    <div class="container reposDisplay">
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
      <repository-card repoName="Rails" language="Ruby" owner="Rails Core Team" stars="5000" description="Imagine what you could build if you learned Ruby on Rails…"/>
    </div>


    <atw-button text="Obter Repositórios"/>

  </div>
</template>

<script>
// @ is an alias to /src


import RepositoryCard from "@/components/RepositoryCard";
import AtwButton from "@/components/shared/atw-button";
import LanguageCard from "@/components/LanguageCard";
export default {
  name: 'Home',
  components: {
    LanguageCard,
    AtwButton,
    RepositoryCard
  }
}
</script>

<style scoped>

.langsDisplay {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70%;
  justify-content: space-between;
  padding-top: 20px;
}

.reposDisplay {
  width: 100%;
  padding-top: 3rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 35px;
}


.home {
  padding-top: 48px;
}

</style>
