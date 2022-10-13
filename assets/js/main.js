const shopping = [
    'Compra pane',
    'Compra latte',
    'Compra insalata',
    'Compra patatine',
    'Compra zucchero',
    'Compra sale',
    'Compra pepe',
    'Compra frutta'
]

const ulEl = document.querySelector('ul')
const shoppingListEl = document.querySelector('.shopping-list')
console.log(shoppingListEl);

let i = 0;
while ( i < shopping.length) {
    const element = shopping[i];
    const liEl = `<li>${element}</li>`
    ulEl.insertAdjacentHTML('beforeend', liEl)
    i++

    
}