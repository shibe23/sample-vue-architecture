<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="Name">Name</abbr></th>
        <th><abbr title="Price">Price</abbr></th>
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
  name: 'cart',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
