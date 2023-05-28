// Asynchronous programming with Promises and async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data successfully fetched!');
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log('Error', error)
    }
}

getData();

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

const squareNumbers = numbers.map((num) => num * num);
console.log('Squared numbers:', squareNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);

//Dom manipulation

// const element = document.getElementById('myElement');
// element.addEventListener('click', () => {
//     element.classList.add('highlight');
// });

//Error handling with try-catch-finally
try {
    throw new Error('Something went Wrong!');
} catch(error) {
 console.log('Error:', error);
} finally {
    console.log('Cleanup CODE!')
}


//Generators and Iterators
function* fibonacci() {
    let a = 0;
    let b = 1;

    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();


for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Regex

const emailPattern = /\S+@\S+\.\S+/;
const email = 'test@example.com';

if(emailPattern.test(email)) {
    console.log('Vaild email address');
} else {
    console.log('Invalid email address');
}

//Map and Set

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

console.log(map.get('name'));
console.log(map.has('age'));
console.log(map.size);

const set = new Set();
set.add(10);
set.add(20);
set.add(30);

console.log(set.has(20))
console.log(set.size);

//Proxy
const person = {
    name: 'John',
    age: 30
};

const proxy = new Proxy(person, {
    get(target, property) {
        console.log(`Accessed property: ${property}`)
        return target[property];
    },
    set(target, property, value) {
        console.log(`Set property: ${property} = ${value}`);
        target[property] = value;
    }
});

proxy.name;
proxy.age = 31;

//Web APIs

fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.log('Error:', error));

 navigator.geolocation.getCurrentPosition(position => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude)
 }, error => {
    console.log('Error:', error);
 });

 
 //Another Proxy
 const targetObject = {
    name: 'John',
    age: 30
 }

 const handler = {
    get(target, property) {
        console.log(`Accessed property: ${property}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`Set property: ${property} = ${value}`);
        target[property] = value;
    },
    deleteProperty(target, property) {
        console.log(`Deleted property: ${property}`);
        delete target[property];
    }
 };

 const proxyObject = new Proxy(targetObject, handler);

 console.log(proxyObject.name);
 proxyObject.age = 31;
 delete proxyObject.age;

 //Memoization 
//  function fibonacci(n, memo = {}) {
//     if(n <= 1) {
//         return n;
//     }

//     if(memo[n]) {
//         return memo[n];
//     }

//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
//  }

//  console.log(fibonacci(5));
////////////////////////////////////////////////////////////////////

//Currying

function add(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = add(5);
console.log(add5(3)); // 8

// Higher order functions 
function multiplyBy(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

//method chaining

class Calculator {
    constructor() {
        this.value = 0;
    }
    add(x) {
        this.value += x;
        return this;
    }
    multiply(x) {
        this.value *= x;
        return this;
    }
    getValue() {
        return this.value;
    }
}

const results = new Calculator().add(5).multiply(3).getValue();
console.log(results)

// Web workers
const worker = new Worker('worker.js');
worker.postMessage('Hello from main thread!');
worker.onmessage = function(event) {
    console.log('Received message from worker:', event.data);
};


// Connect 4 algo
// Define the game board
const board = [
    [0, 0, 0, 0, 0, 0, 0], // Row 0
    [0, 0, 0, 0, 0, 0, 0], // Row 1
    [0, 0, 0, 0, 0, 0, 0], // Row 2
    [0, 0, 0, 0, 0, 0, 0], // Row 3
    [0, 0, 0, 0, 0, 0, 0], // Row 4
    [0, 0, 0, 0, 0, 0, 0]  // Row 5
  ];
  
  // Function to check if a player has won
  function checkWin(player) {
    // Check horizontal
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          return true;
        }
      }
    }
  
    // Check vertical
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 7; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }
  
    // Check diagonal (top-left to bottom-right)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
  
    // Check diagonal (bottom-left to top-right)
    for (let row = 3; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === player &&
          board[row - 1][col + 1] === player &&
          board[row - 2][col + 2] === player &&
          board[row - 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Example usage:
  // Assume player 1 is represented by '1' on the board, and player 2 is represented by '2'.
  // Let's assume player 1 has made their moves on the board, and we want to check if they have won.
  if (checkWin(1)) {
    console.log("Player 1 wins!");
  } else {
    console.log("Player 1 did not win.");
  }
  
// More Complex   // In this example, we define two functions. The first function, isPrime, checks whether a given number is prime or not. It uses a basic primality test using a loop and the modulus operator.

//The second function, generatePrimes, generates the first 'n' prime numbers. It utilizes the isPrime function to determine if a number is prime and keeps track of the count of prime numbers found.

//Finally, we test the generatePrimes function by calling it with numberOfPrimes = 5 and store the result in the primeNumbers variable. The script then logs the generated prime numbers to the console.


//function to check if a number is prime
function isPrime(number) {
    if(number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }        
    }
    return true;
}

//Function to generate the first 'n' prime numbers
function generatePrimes(n) {
    const primes = [];
    let count = 0;
    let number = 2;

    while(count < n) {
        if(isPrime(number)) {
            primes.push(number);
            count++;
        }
        number++;
    }
    return primes;
}

//Test the generatePrimes function
const numberOfPrimes = 5;
const primeNumbers = generatePrimes(numberofPrimes);
console.log(`The first ${numberOfPrimes} prime numbers are: ${primeNumbers.join(', ')}`);