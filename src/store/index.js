import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {}
  },
  getters: {
  },
  mutations: {
    SET_RESUME(state, data) {
      state.resume = data
      state.resume.phone = data.phone
    }
  },
  actions: {
    async get_resume({ state, commit }) {
      try {
        const url = `/api/resume/denisa`
        const { data, status } = await axios.get(url)
        commit("SET_RESUME", data)
        console.log(status)
      }
      catch (err) {

      }
    }
  },
  modules: {
  }
})
