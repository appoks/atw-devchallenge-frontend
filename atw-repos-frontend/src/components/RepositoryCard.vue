<template>
  <div class="repoCard" @click="repoDetails(id)">
      <section class="cardHeader">
        <p class="">
          <strong>{{ repoName }}</strong>
          <span class="comp">, by </span>
          <i>{{ owner }}</i>
          <span class="comp">.</span>
        </p>
      </section>
      <section class="cardBody">
        {{ description }}
      </section>
      <section class="cardFooter">
        <p class="langTag">{{ language }}</p>
        <p class=""><font-awesome-icon icon="star" /> <strong>{{ stars }}</strong></p>
      </section>
  </div>
</template>

<script>
export default {
  name: "RepositoryCard",
  props: ['repoName', 'language', 'owner', 'stars', 'description', 'id'],
  methods: {
    repoDetails: function (id) {
      this.$router.push(`/details/${id}`);
    }
  }
}
</script>

<style scoped>

.repoCard {
  box-shadow: #EF0044;
  background-color: whitesmoke;
  border: 1px solid white;
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 25px;
}

.repoCard:hover {
  border: 1px solid #EF0044;
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 0.35s;

}

.cardHeader {
  margin-bottom: 15px;
  align-self: flex-start;
  flex-grow: 0
}

.cardBody {
  flex-grow: 1
}

.cardFooter {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
  flex-grow: 0;
}

.comp {
  color: gray;
}

.langTag {
  font-weight: bold;
}



</style>