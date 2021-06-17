<template>
  <div v-show="isVisibleCart" class="cart">
    Корзина:
    <div class="cart-list">
      <div v-for="item in cartGoods" :key="item.id_product" class='goods-item'>
        <img class = "image">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}}</p>
        <button @click="onClick(item)" class="del-button">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000'

export default {
  props: {
    isVisibleCart: {
      type: Boolean,
      default: false,
    },
    cartGoods: {
      type: Array,
      default: () => ([]),
    },
    makePOSTRequest:{
      type: Function,
      default: () => null  
    },
    getCart:{
      type: Function,
      default: () => null  
    },
  },
  methods: {
    onClick(item) {
      this.makePOSTRequest(`${API_URL}/deleteFromCart`, item)
        .then(() => this.getCart())
    }
  }
}
</script>

<style>
.cart {
  box-shadow: 2px 2px 2px 2px rgb(112, 110, 110);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgb(137, 220, 223);
  overflow: auto;
  transform: translate(-50%,-50%);
}

.cart-list {
  max-width: 1600px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(150px, 150px))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  grid-gap: 10px;
}

</style>