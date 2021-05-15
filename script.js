`use strict`

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250},
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250},
];

const renderGoodsItem = (title = `Товар`, price = 0) => {
  return `<div class="goods-item"><img class = "image"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let htmlStr = ``;
  list.forEach(item => htmlStr += renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = htmlStr;
}

renderGoodsList(goods);


