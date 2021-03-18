import Vue from 'vue'
import Vuex from 'vuex'
import RepositoryService from "@/services/RepositoryService";
import LanguageService from "@/services/LanguageService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages: [],
    repositories: [],
    repository: {},
    total: 0
  },
  mutations: {
    SET_LANGS(state, langs) {
      state.languages = langs;
    },
    SET_REPOS(state, repos) {
      state.repositories = repos;
    },
    SET_TOTAL_REPOS(state, total) {
      state.total = total;
    },
    SET_REPO(state, repo) {
      state.repository = repo;
    },
  },
  actions: {
    fetchLanguages({ commit }) {
      LanguageService.list()
          .then(res => {
            commit("SET_LANGS", res.data);
          })
          .catch(err => {
            console.log(err.response);
          });
    },
    fetchRepositories({ commit }, { perPage, page }) {
      RepositoryService.list()
          .then(res => {
            commit("SET_REPOS", res.data);
            commit("SET_TOTAL_REPOS", res.headers["x-total-count"]);
          })
          .catch(err => {
            console.log(err.response);
          });
    },

    fetchRepository({ commit, getters, dispatch }, id) {
      const repo = getters.getRepoById(id);

      if (repo) {
        commit("SET_REPO", product);
      } else {
        RepositoryService.details(id)
            .then(res => {
              commit("SET_REPO", res.data);
            })
            .catch(err => {
              console.log(err.response);
            });
      }
    },
  },
  modules: {
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.repositories.find(repo => repo.id === id);
    }
  }
})
