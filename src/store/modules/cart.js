import Ajax from '../../lib/ajax';

const state = {
    data: {},
}

const getters = {

}

const actions = {
  async addItemToCart (context){
    const URL = "";
    const ajax = new Ajax;
    const result = await ajax.get(URL);
    context.commit('updateData', result.data)
  }
}

const mutations = {
  updateData(state, payload){
    state.data = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true  
}