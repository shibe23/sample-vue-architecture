<template>
  <button @click="onClickAdd()">Click!</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cart',
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      addItemToCart: 'cart/addItemToCart'
    }),
    onClickAdd: function(){
      this.addItemToCart()
    }

  },
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
