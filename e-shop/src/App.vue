<template>
<div>
      <main>
        <Header @toggle-cart="toggleCartStatus" @filter-goods="filterGoods" />
        <GoodsList :goods="filteredGoods" />
        <Cart @add-to-cart="addToCart" :cartGoods="cartGoods" :isVisibleCart="isVisibleCart" />
      
        <br />
        
        
      </main>
  </div>   
</template>

<script>
import GoodsList from './components/GoodsList';
import Header from './components/Haeder';
import Cart from './components/Cart';

const API_URL = 'http://localhost:3000';

export default {
  components: {
    GoodsList,
    Header,
    Cart,
  },

  data: () => ({
    goods: [],
    cartGoods: [],
    filteredGoods: [],
    // searhLine: '',
    isVisibleCart: false,
  }),
  
  mounted() {
    this.getGoods();
    this.getCart();
  },

  methods: { 
    addToCart(item){
      this.makePOSTRequest(`${API_URL}/addToCart`, item)
        .then(() => this.getCart())
    },

    makeGETRequest(url){
      return fetch(url)
        .then((data) => data.json())
    },

    makePOSTRequest(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          // добавили хэдер
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
    },
    
    getGoods(){
      this.makeGETRequest(`${API_URL}/catalogData`)
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        })
    },

    getCart(){
      this.makeGETRequest(`${API_URL}/cartData`)
        .then((data) => {
          this.cartGoods = data;
        })
    },

    filterGoods (value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCartStatus () {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
}
</script>

<style>




.image {
  min-width: 130px;
  min-height: 130px;
  outline: 1px solid red;
}

h3,
p {
  margin: 0;
}
/*# sourceMappingURL=style.css.map */
</style>
