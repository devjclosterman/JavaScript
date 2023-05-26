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