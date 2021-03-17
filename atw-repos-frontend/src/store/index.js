import Vue from 'vue'
import Vuex from 'vuex'
import RepositoryService from "@/services/RepositoryService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages: [],
    repositories: [],
    repository: {},
    total: 0
  },
  mutations: {
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
    fetchRepositories({ commit, dispatch }, { perPage, page }) {
      RepositoryService.list()
          .then(res => {
            commit("SET_REPOS", res.data);
            commit("SET_TOTAL_REPOS", res.headers["x-total-count"]);
          })
          .catch(err => {
            console.log(err.response);
          });
    },

    // @ts-ignore
    fetchRepository({ commit, getters, dispatch }, id) {
      const product = getters.getProductById(id);

      if (product) {
        commit("SET_REPO", product);
      } else {
        ProductService.details(id)
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
  }
})

export const getters = {
  getProductById: (state) => (id) => {
    return state.repositories.find(repo => repo.id === id);
  }
};
