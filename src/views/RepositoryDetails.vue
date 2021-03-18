<template>

  <div class="repository-details">


  <div class="details-wrapper">

    <section class="details-header">
      <h6 class="card-title"><b>DETALHES DO REPOSITÓRIO</b></h6>
        <p>
          <strong>{{ repo.name.toUpperCase() }}</strong>
        </p>
        <p>
          <strong>
            {{ repo.stars }}
          </strong>
          <font-awesome-icon icon="star" />
      </p>
    </section>

    <section class="details-body">
      <p><b>Descrição:</b> {{ repo.description }}</p>
      <p><b>Última atualização:</b> {{ repo.last_activity_date | formatDateTime}} </p>

    <hr/>

      <span class="statistics">
            <p><b>Forks:</b> {{ repo.forks }} <font-awesome-icon icon="code-branch" /></p>
            <p><b>Issues:</b> {{ repo.issues }} <font-awesome-icon icon="bug" /></p>
            <p><b>Watchers:</b> {{ repo.watchers }} <font-awesome-icon icon="eye" /></p>
      </span>

      <hr/>

      <p v-if="repo.homepage "><b>Homepage:</b> <a :href="repo.homepage">{{ repo.homepage }} </a> </p>
      <p><b>Criado por: </b>{{ repo.owner_name }}</p>
      <p><b>Criado em: </b>{{ repo.creation_date | formatDateTime }} </p>

      <hr/>

      <span>
        <p><i>Escrito em <strong>{{ repo.language.name.toUpperCase() }}</strong></i></p>
        <p><b>Score:</b> {{ repo.score | formatValue }} </p>
      </span>

    </section>




  </div>
    <a class="button" @click="back"> <font-awesome-icon icon="arrow-circle-left" /> <strong>Voltar</strong> </a>
  </div>
</template>

<script>
import {mapState} from "vuex";
import moment from 'moment';


export default {
  name: "RepositoryDetails",
  mounted() {
    this.$store.dispatch('fetchRepository', this.$route.params.id)
  },
  methods: {
    back: function () {
      this.$router.push('/')
    }
  },
  filters: {
    formatDateTime: function (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
      }
    },
    formatValue: function (value) {

      return value.toFixed(2)

    }
  },
  computed:
      mapState({
        repo: state => state.repository
      })
}
</script>

<style scoped>

.details-wrapper {
  max-width: 960px;
  background-color: whitesmoke;
  margin: 48px auto;
}

.details-header {
  text-align: center;
  padding: 24px 24px;
  display: flex;
  justify-content: space-between;
}

.details-body {
  text-align: left;
  padding: 24px 24px;
}

.details-body p {
  margin: 25px 0;
}

.details-body .statistics {
  justify-content: space-around;
}

.details-body span {
  display: flex;
  justify-content: space-between;
}

.details-body hr {
  margin: 15px 15px;
}

a {
  color: #EF0044;
}

.button {
  padding: 0 30px;
  cursor: pointer;
}

.card-title {
  display: none;
}

@media (min-width: 500px) {

  .card-title {
    display: block;
  }
}
</style>