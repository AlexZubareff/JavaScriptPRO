// Заменяет все одинарные ковычки на двойные

const str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 'Deserunt' maiores exercitationem quo. Suscipit corpori's repellendus nesciunt natus 'minima'. Iste, perferendis dolores neque minima possimus quisquam soluta sit iusto quia minus?`;
const regexp = new RegExp('\'', 'g');
str.replace(regexp, '"'); 
console.log(str.replace(regexp, '"'))

// Заменяет все одинарные ковычки на двойные только в начале о конце слова.

const str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 'Deserunt' maiores exercitationem quo. Suscipit corpori's repellendus nesciunt natus 'minima', Iste, perferendis dolores neque minima possimus quisquam soluta sit iusto quia minus?`;
const regexp = /(\B'|'\B)/g
// str.match(regexp);
// console.log(str.match(regexp))
str.replace(regexp, '"'); 
console.log(str.replace(regexp, '"'));