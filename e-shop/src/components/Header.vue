<template>
    <header class="header">
        <div class="total-sum"></div>
        <input v-model="searchValue" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="onClick">Искать</button>
        <button class="cart-button" type="button" @click="$emit('toggle-cart')">Корзина</button>
      </header>
</template>

<script>
export default {
    data: () => ({
        searchValue: '',
    }),
    methods: {
        onClick() {
            this.$emit('filter-goods', this.searchValue);
        },
    },
    watch: {
        searchValue() {
        this.onClick();
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
  background-color: rgb(226, 43, 98);
  color: rgb(255, 255, 255);
  border-radius: 20px;
  margin-right: 50px;
  margin-left: 10px;
  border: none;
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
    border: none;

}
.search-button {
    width: 80px;
    height: 30px;
    background-color: rgb(226, 43, 98);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    margin-right: 50px;
    margin-left: 10px;
    border: none;

}
.search-button:hover {
  background-color: #db104d;
  cursor: pointer;
}

</style>