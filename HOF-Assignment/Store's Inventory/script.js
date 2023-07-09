const store = {
  item1: 10,
  item2: 20,
  item3: 30,
  item:50,
};

const exchangeRate = 80;

const convertedStore = Object.entries(store).map(([item, price]) => {
  return [item, price * exchangeRate];
});
console.log(convertedStore); // array

const convertedInRupees = Object.entries(convertedStore);

console.log(convertedInRupees);
