<template>
  <div>
    Элитные товары:
    <div class="goods-list">
      <div v-for="item in goods" :key="item.id_product" class='goods-item'>
        <img class = "image">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}}</p>
        <button @click="onClick(item)">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    onClick(item) {
      this.$emit('add-to-cart', item);
    }
  }
}
</script>

<style>

.goods-list {
  max-width: 1600px;
  margin: 0 auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(150px, 250px))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
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

</style>