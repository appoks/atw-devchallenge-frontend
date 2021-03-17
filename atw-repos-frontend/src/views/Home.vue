<template>
  <div class="home">

    <p v-if="repos.length < 1">
      Ei, quer saber quais os 5 repositórios mais populares para as linguages que eu mais acho daora?
    </p>
    <p v-else>
      Exibindo os 5 repositórios mais populares para as linguagens:
    </p>

    <div class="langsDisplay">
      <div v-for="lang in langs" :key="lang.code">
        <language-card :lang_name="lang.name"/>
      </div>
    </div>

    <div class="container reposDisplay">

      <div v-for="repo in repos" :key="repo.id">
        <repository-card
            :repoName="repo.name"
            :language="repo.language.name"
            :owner="repo.owner_name"
            :stars="repo.stars"
            :description="repo.description"
            :id="repo.id"
        />
      </div>
    </div>

    <a class="button" @click="fetchRepositories" v-if="repos.length < 1"> OBTER REPOSITÓRIOS</a>

  </div>
</template>

<script>
import RepositoryCard from "@/components/RepositoryCard";
import AtwButton from "@/components/shared/atw-button";
import LanguageCard from "@/components/LanguageCard";
import { mapState, mapActions } from 'vuex';

import LanguageService from "@/services/LanguageService";
import RepositoryService from "@/services/RepositoryService";


export default {
  name: 'Home',
  components: {
    LanguageCard,
    AtwButton,
    RepositoryCard
  },
  data() {
    return {
    };
  },
  computed:
    mapState({
      langs: state => state.languages,
      repos: state => state.repositories
    })
,

  mounted() {
    this.$store.dispatch('fetchLanguages')
  },

  methods: {
    ...mapActions([
        'fetchRepositories',
      ])
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
  padding-bottom: 50px;
}

.button {
  background: #EF0044;
  @apply m-2 p-4 rounded-xl text-white font-semibold
}

.button:hover {
  cursor: pointer;
}

.home {
  padding-top: 48px;
}

</style>
