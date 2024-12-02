//A HOF is functions that returns fn as an argument and can also return a fn or result
//eg map , filter, reduce

const higherOrderFunction = (func) => {
  const value = 5;
  return func() + value;
};

//polyfill for map function

const transform = (value) => {
  return value * 2;
};

const map = function (transform) {
  const array = this;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i], i, array));
  }
  return result;
};

Array.prototype.customMap = map;
const res = [1, 3, 4, 5].customMap(transform);
console.log("res: ", res);

//polyfill for reduce

//reduce - 1.acc--- 2.current value --3. initial value

const reduceValues = (acc) => {
  return (curr) => acc + curr;
};

const reduce = function (reduceValues, initialValue) {
  const array = this;
  let total = initialValue;

  for (let i = 0; i < array.length; i++) {
    const reduce = reduceValues(total);
    total = reduce(array[i]);
  }
  return total;
};

Array.prototype.customReduce = reduce;
const sum = [1, 2, 4, 7].customReduce(reduceValues, 0);
console.log("sum: ", sum);

//lodash _.minBy

function minBy(array, iteratee) {
  let minValue = Infinity;
  let minElement = undefined;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let computedValue = iteratee(element);
    if (minValue > computedValue) {
      minValue = computedValue;
      minElement = element;
    }
  }
  return minElement;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
const cheapestProduct = minBy(products, (product) => product.price);
console.log(cheapestProduct); // Output: { name: 'Tablet', price: 300 }
