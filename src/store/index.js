import Vuex from "vuex"



export default new Vuex.Store({
    state: {
        isOpen: false
    },
    mutations: {
        increment(store){
            store.isOpen = !store.isOpen
        }
    },
    // actions: {
    //     increment (context) {
    //       context.commit('increment')
    //     }
    //   }
})