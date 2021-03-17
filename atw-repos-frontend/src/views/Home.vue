<template>
  <div class="home">


    <p>
      Linguagens...
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
            @click="repoDetails(repo.id)"/>

      </div>
    </div>


    <a class="button" @click="retrieveRepos" v-if="repos.length < 1"> OBTER REPOSITÓRIOS</a>

  </div>
</template>

<script>
import RepositoryCard from "@/components/RepositoryCard";
import AtwButton from "@/components/shared/atw-button";
import LanguageCard from "@/components/LanguageCard";

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
      repos: [],
      langs: []
    };
  },
  computed: {},

  mounted() {
    this.retrieveLangs();
  },

  methods: {
    retrieveLangs: function () {
      console.log("Fetching LANGS!");
      LanguageService.list()
          .then(response => {
            this.langs = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    retrieveRepos: function () {
      console.log("Fetching REPOS!");
      RepositoryService.list()
          .then(response => {
            this.repos = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    repoDetails: function (id) {
      this.$router.push(`/details/${id}`);
    }
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
