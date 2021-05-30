`use strict`

// ДЗ 3
// 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
// 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.
// 3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const makeGETRequest = (url, callback) => {
  return new Promise ((resolve, reject) => {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) callback(xhr.responseText)
      else reject(`Error`)
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
})
}

class GoodsItem {
  constructor (product_name, price, id_product) {
    this.price = price;
    this.product_name = product_name;
    this.id_product = id_product;
  }

  render (){
    let data = {
      price: this.price,
      product_name: this.product_name,
      id_product: this.id_product,
    };
    
    data = JSON.stringify(data);

    return `<div class="goods-item">
              <img class = "image">
              <h3>${this.product_name}</h3>
              <p>${this.price}</p>
              <button data-product='${data}' id='add-btn-${this.id_product}'>В корзину</button>
              </div>`;
    }
}

class GoodsList {

  _cart = new Cart()

  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
    })
  }

  filteredGoods (value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }
  render () {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    this._cart.setAddListeners(this.filteredGoods);
  }
// Вычисление общей стоимости  goods
  sumGoodsListPrice () {
    const totalSum = this.goods.reduce((totalSumItem, goods) => totalSumItem + goods.price,0);
    document.querySelector('.total-sum').innerHTML = totalSum;
    console.log(totalSum);
    }
}

class Cart  {
  constructor () {
    this.goods = [];
  }
  clearAll () {
    this.goods = [];
    
  }

  addItem ({target}) {
    const { product = {} } = target.dataset;
    this.goods.push(JSON.parse(product));
    this.render();
  }

  removeItem({target}) {
    const { id = null} = target.dataset;
    this.goods = this.goods.filter((item) => String(item.id_product) !== String(id));
    this.render();
  }

  setAddListeners(list = []) {
    list.forEach((item) => {
      document.getElementById(`add-btn-${item.id_product}`).addEventListener('click', (e) => this.addItem(e));
    })
  }

  setDeleteListeners() {
    this.goods.forEach((item) => {
      document.getElementById(`delete-btn-${item.id_product}`).addEventListener('click', (e) => this.removeItem(e));
    })
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new CartItem(good.product_name, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.cart-list').innerHTML = listHtml;
    this.setDeleteListeners();
  }
}


class CartItem extends GoodsItem {
  constructor (...args) {
    super(...args);
    this.count = 0;
  }
  addOne () {}
  removeOne () {}

  render() {
    return `<div class='goods-item'>
              <img class = "image">
              <h3>${this.product_name}</h3>
              <p>${this.price}</p>
              <button data-id='${this.id_product}' id='delete-btn-${this.id_product}'>Удалить</button>
            </div>`;
  }
  }




const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
  list.sumGoodsListPrice();
});



const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.goods-search')
searchButton.addEventListener('click', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});
searchInput.addEventListener('keydown', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});




