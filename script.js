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

