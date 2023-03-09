
let name1 ='hEllo';
const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < name1.length; i++) {
    if (vowels.includes(name1[i].toLowerCase())) {
      count++;
    }
  }
console.log(count);

