<template>
  <div class="home">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in cart" :key="index">
          <td>{{ record.name }}</td>
          <td>{{ record.price }}</td>
          <td><input type="text" class="input"/></td>
          <td><button class="button is-primary" @click="onClickAdd(index)">add</button></td>
        </tr>
      </tbody>
    </table>

    <button class="button">Check Out</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'home',
  props: {
    msg: String
  },
  data: function(){
    return {
      basket:[]
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.data,
    }),
  },
  methods: {
    ...mapActions({
      addItemToCartAction: 'cart/addItemToCart'
    }),
    onClickAdd: function(index){
      this.basket.push([
        this.cart[index].name,
        this.cart[index].number,
      ]);
    }
  },
  mounted: async function(){
    // Dispatch Acion
    this.addItemToCartAction();
  }
}
</script>
