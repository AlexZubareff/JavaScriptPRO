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

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

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
    this.makeGETRequest(`${API_URL}/catalogData.json`)
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
.header {
  height: 50px;
  background-color: #162f55;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.cart-button {
  width: 80px;
  height: 30px;
  background-color: #e22b62;
  margin-right: 50px;
  border-radius: 20px;
  color: white;
}

.cart-button:hover {
  background-color: #db104d;
  cursor: pointer;
}

.total-sum {
  width: 80px;
  height: 30px;
  background-color: #e22b62;
  margin-right: 50px;
  border-radius: 20px;
  color: white;
  text-align: center;
  line-height: 30px;
}

.goods-search {
    width: 150px;
    height: 25px;
    border-radius: 20px;
}
.search-button {
    width: 80px;
    height: 30px;
    background-color: rgb(226, 43, 98);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    margin-right: 50px;
    margin-left: 10px;
}
.search-button:hover {
  background-color: #db104d;
  cursor: pointer;
}


.cart {
  box-shadow: 0px 0px 5px 2px black;
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
