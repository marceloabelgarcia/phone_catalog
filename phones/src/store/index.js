import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL_API = "http://localhost:8000/api";

export default new Vuex.Store({
  state: {
    phones: [],
    phone: {},
    axios_error: {
      show: false,
      message: "",
    },
    loading: false,
  },
  mutations: {
    updatePhones(state, data) {
      state.phones = data;
    },
    updatePhone(state, data) {
      state.phone = data;
    },
    closeAxiosError(state) {
      state.axios_error.show = false;
      state.axios_error.message = "";
    },
    showError(state) {
      state.axios_error.message = "Ha ocurrido un problema. Intente más tarde";
      state.axios_error.show = true;
    },
    showLoading(state, show) {
      state.loading = show;
    },
  },
  actions: {
    async loadPhones({ commit }) {
      commit("showLoading", true);
      const { data } = await axios.get(URL_API + "/phones/");
      commit("updatePhones", data);
      setTimeout(() => {
        commit("showLoading", false);
      }, 200);
    },

    async loadPhone({ commit }, id) {
      commit("showLoading", true);
      const { data } = await axios.get(URL_API + `/phones/${id}`);
      commit("updatePhone", data);
      setTimeout(() => {
        commit("showLoading", false);
      }, 200);
    },
  },
  modules: {},
});
