let shoppingCart = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 1, name: 'Product 1', price: 10 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 2, name: 'Product 2', price: 20 }
];

let uniqueCart = [];

shoppingCart.forEach(item => {
    let i = uniqueCart.findIndex(x => x.id === item.id);
    if (i <= -1) {
        uniqueCart.push(item);
    }
});

console.log(uniqueCart);
