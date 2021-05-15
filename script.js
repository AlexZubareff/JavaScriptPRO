`use strict`

class GoodsItem {
  constructor (title, price) {
    this.title = title;
    this.price = price;
  }
  render (){
    return `<div class="goods-item"><img class = "image"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
    fetchGoods () {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250},
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250},
    ];
  }
  render () {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
// Вычисление общей стоимости  goods
  sumGoodsListPrice () {
    return this.goods.reduce((sumCostItem, goods) => sumCostItem + goods.price,0);
    }
}

class Cart {
  constructor (title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  // метод отрисовки корзины
  // метод добавления товара в корзину
  // метод удаления товара из корзины
  // метод подсчета суммы товаров в корзине
}

class CartItem {
  constructor (title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
//метод изменения колличества данного товара в корзине

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoodsListPrice();


