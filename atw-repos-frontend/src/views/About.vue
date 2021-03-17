<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import RepositoryService from "@/services/RepositoryService";

export default {
  name: "About",
  data() {
    return {
      reposFromDB: [],
    };
  },
  computed: {},

  mounted() {
    this.retrieveRepos();
  },

  methods: {
    retrieveRepos: function () {
      console.log("Fetching PRODS!");
      RepositoryService.list()
          .then(response => {
            this.reposFromDB = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}

</script>