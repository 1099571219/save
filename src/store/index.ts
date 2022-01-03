import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //把 store 绑到 vue.prototype 上
const store = new Vuex.Store({
  state: {//data
    count: 0
  },
  mutations: {//methods 不能直接调
    increment(state, n: number) { //没有this
      state.count += n;
    }
  },
  actions: {
  },
  modules: {
  }
})
console.log(store.state.count)
store.commit('increment', 10)
console.log(store.state.count)

export default store
