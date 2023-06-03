// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  
// do not worry about negative bases and exponents.

const Mathematics = {
  power: function (base, exp) {
    if (exp === 0) return 1; 
    console.log(base, exp)
    return base *= this.power(base, exp - 1);
  }
}
console.log(Mathematics.power(2, 2));

const reverse = (str) => {
  // add whatever parameters you deem necessary - good luck!
  const arr = str.split('');
  const result = [];
  let i = arr.length;
  const main = newArr => {
    if (i <= 0) return;
    result[i] = newArr.shift();
    i--
    main(newArr);
    return newArr;
  }
  main(arr);
  return result.join('');
}
console.log(reverse('awesome')) // 'emosewa'