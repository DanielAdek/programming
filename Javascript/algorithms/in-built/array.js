const numbers = [2, 58, 18, 4];

// build your own forEach method

Array.prototype.forEach = null;

// using forEach, check if all numbers even

const validateEven = (num, index) => {
  console.log(`The number at index ${index} is even number: `, num % 2 === 0);
}

// numbers.forEach(validateEven); // Error: forEach is not a function

Array.prototype.forEach = function (callback) {
  for (let i =0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

numbers.forEach(validateEven); // no error: function works now



// build your own slice method
Array.prototype.slice = null;

// numbers.slice() // Error: slice is not a function
Array.prototype.slice = function (start = 0, end = this.length) {
  const sliced = new Array();
  if (start < 0) {
    start = this.length + start;
  }
  if (end <= 0) {
    end = end + this.length;
  }

  let index = 0;
  for (let i=0; i < this.length; i++) {
    if (i >= start && i < end) {
      sliced[index] = this[i];
      index++;
    }
  }
  return sliced;
}
// numbers.slice(0, 3); // no error: [2, 58, 18]


// build your own splice method but does not replace element

Array.prototype.splice = function (start = 0, deleteCount = 0) {
  // Hold deleted items
  const deletedItems = new Array();

  // catch edge cases

  // when the start is greater than the length of the array
  if (start > this.length) return;

  // when the start is less than 0
  if (start < 0 && Math.abs(start) < this.length) {
    start = start + this.length
    deleteCount = Math.abs(start);
  }

  if (start > this.length) return;

  // when deleteCount is greater than the length of the array
  if (deleteCount > this.length - start) deleteCount = this.length - 1;


  // Get all items to be deleted
  for (let i = 0; i < deleteCount; i++) {
    deletedItems[i] = this[start + i];
  }

  // shift all items after deleted ones to the front if any
  for (let i = start; i < this.length; i++) {
    this[i] = this[i + deleteCount];
  }

  this.length = this.length - deletedItems.length;

  return deletedItems;
}

const deleted = numbers.splice(-1, 40);
console.log(deleted);
console.log(numbers);


// Full splice implementation
// Array.prototype.splice = function (start = 0, deleteCount = this.length, ...items) {
//   const deletedItems = [];
//
//   // Handle negative indices
//   if (start < 0) {
//     start = this.length + start;
//     if (start < 0) start = 0;
//   }
//
//   // Ensure deleteCount is within bounds
//   deleteCount = Math.min(Math.max(0, deleteCount), this.length - start);
//
//   // Extract deleted items
//   for (let i = 0; i < deleteCount; i++) {
//     deletedItems.push(this[start + i]);
//   }
//
//   // Shift elements after start position
//   for (let i = start; i < this.length - deleteCount; i++) {
//     this[i] = this[i + deleteCount];
//   }
//
//   // Remove extra elements at the end
//   this.length = this.length - deleteCount;
//
//   // Insert new items
//   for (let i = this.length; i > start; i--) {
//     this[i + items.length - 1] = this[i - 1];
//   }
//
//   for (let i = 0; i < items.length; i++) {
//     this[start + i] = items[i];
//   }
//
//   return deletedItems;
// }
