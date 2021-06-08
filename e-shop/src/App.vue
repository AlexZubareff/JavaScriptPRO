<template>
<div>
      <main>
        <Header @toggle-cart="toggleCartStatus" @filter-goods="filterGoods" />
        <GoodsList :goods="filteredGoods" />
        <Cart :isVisibleCart="isVisibleCart" />
      
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
    filteredGoods: [],
    // searhLine: '',
    isVisibleCart: false,
  }),
  
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData`)
  },

  methods: { 
    makeGETRequest(url){
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
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
