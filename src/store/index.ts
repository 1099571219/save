import clone from '@/components/lib/clone';
import Vue from 'vue'
import Vuex from 'vuex'
const localStorageKeyName = 'recordList'

Vue.use(Vuex) //把 store 绑到 vue.prototype 上
const store = new Vuex.Store({
  state: {//data
    recordList: [] as RecordItem[]
  },
  mutations: {//methods 不能直接调
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date();
      state.recordList?.push(recordCopy);//等价于&&
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
  },
})

export default store
