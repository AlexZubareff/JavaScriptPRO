<template>
     <header class="header">
        <div class="total-sum"></div>
        <input v-model="searhLine" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="filterGoods">Искать</button>
        <button class="cart-button" type="button" @click="toggleCartStatus">Корзина</button>
      </header>
      <main>
        Товары:
        <div class="goods-list">
          <div v-for="item in filteredGoods" :key="item.id_product" class='goods-item'>
              <img class = "image">
              <h3>{{item.product_name}}</h3>
              <p>{{item.price}}</p>
              <button>Добавить</button>
            </div>
        </div>
        <br />
        
        <div v-show="isVisibleCart" class="cart">
          Корзина:
            <div class="cart-list"></div>
        </div>
        
      </main>
</template>

<script>

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
  data: () => ({
    goods: [],
    filteredGoods: [],
    searhLine: '',
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

    filterGoods () {
        const regexp = new RegExp(this.searhLine, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCartStatus () {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
  watch: {
    searhLine() {
      this.filterGoods();
    }
  }
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

.goods-list {
  max-width: 1600px;
  margin: 0 auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(150px, 250px))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  grid-gap: 10px;
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

.goods-item {
  margin-top: 20px;
  min-height: 250px;
  outline: 1px solid black;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
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
