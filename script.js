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
