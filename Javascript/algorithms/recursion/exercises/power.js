// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  
// do not worry about negative bases and exponents.

const Mathematics = {
  power: function (base, exp) {
    const stop = [];

    stop.length = exp;
    
    if (!stop.length) return;

    if (exp > 0) return 1;

    base *= base;
    this.power(exp - 1);
    return base;
  }
}

console.log(Mathematics.power(2, 2))