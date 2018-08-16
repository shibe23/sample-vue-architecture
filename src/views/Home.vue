<template>
  <div class="home">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in cart" :key="index">
          <td>{{ record.name }}</td>
          <td>{{ record.price }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="onClickAdd()">Click!</button>
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
  computed: {
    ...mapState({
      cart: state => state.cart.data,
    }),
  },
  methods: {
    ...mapActions({
      addItemToCartAction: 'cart/addItemToCart'
    }),
    onClickAdd: function(){
      this.addItemToCartAction()
    }
  },
  mounted: async function(){
    // Dispatch Acion
    this.addItemToCartAction();
  }
}
</script>
