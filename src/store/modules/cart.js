import Ajax from '../../lib/ajax';

const state = {
    test: "test"
}

const getters = {

}

const actions = {
  async addItemToCart (){
    console.log("actions!")
    const URL = "";
    const ajax = new Ajax;
    console.log(await ajax.get(URL));

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