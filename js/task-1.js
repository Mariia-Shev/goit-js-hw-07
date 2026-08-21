const listItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  const title = item.querySelector('h2');
  const categoryItems = item.querySelectorAll('ul li');

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
