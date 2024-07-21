'use strict';

const categories = document.querySelectorAll('#categories .item');


// 1. Підрахуок та виведення в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numberOfCategiries = `Number of categories: ${categories.length}`;
console.log(numberOfCategiries);

// 2. Для кожного елемента li.item у списку ul#categories знахоимо та виведимо в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});