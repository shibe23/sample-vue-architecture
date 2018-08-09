const state = {
    test: "test"
}

const getters = {

}

const actions = {
  addItemToCart (){
    console.log("actions!")
  }
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true  
}