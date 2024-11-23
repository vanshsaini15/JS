function add(n) {
  // write your code below

  return {
    add: (num) => {
      return add(num + n);
    },
    sum: () => {
      return n;
    },
  };
}

const value = add(4).add(2).add(4).sum();
console.log(value); // Outputs: 10

//USING CURRYING
function add1(n) {
  // write your code below

  return (num) => {
    return num ? add(num + n) : n;
  };
}
const value1 = add1(4)(2)(3);
console.log(value1()); // Outputs: 9

//1. Private Variables and Encapsulation

// Real-world: Creating a secure bank account module
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  let transactions = []; // Private transaction log

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        transactions.push({ type: "deposit", amount, timestamp: new Date() });
        return balance;
      }
      throw new Error("Deposit amount must be positive");
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        transactions.push({
          type: "withdrawal",
          amount,
          timestamp: new Date(),
        });
        return balance;
      }
      throw new Error("Insufficient funds or invalid amount");
    },
    getBalance() {
      return balance;
    },
    getTransactionHistory() {
      // Returns a copy to prevent direct manipulation
      return [...transactions];
    },
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500); // 1500
myAccount.withdraw(200); // 1300
console.log(myAccount.getBalance()); // 1300
// Cannot directly access 'balance' or 'transactions'

//------------------------------------------------------------------------------------//

//2. Memoization (Caching Function Results)

// Real-world: Expensive Calculation Caching
function expensiveCalculation(n) {
  console.log(`Calculating for ${n}`);
  return n * n * n;
}

function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      console.log(`Returning cached result for ${arg}`);
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

const memoizedCalc = memoize(expensiveCalculation);
console.log(memoizedCalc(5)); // First call: calculates and caches
console.log(memoizedCalc(5)); // Second call: returns cached result
