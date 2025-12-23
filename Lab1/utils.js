export const productInfo = (name, price) => `Sản phẩm: ${name}, Giá: ${new Intl.NumberFormat('en-US').format(price)} VNĐ`;

export const greet = (name) => `Xin chào, ${name}!`;

export const sumUpTo = (n) => (n * (n + 1)) / 2;

export const square = (n) => n * n;

export const isEven = (n) => n % 2 === 0;

export const firstElement = (arr) => arr[0];

export const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

export const formatUser = ({ name, age }) => `Name: ${name}, Age: ${age}`;

export const listNames = (people) => people.map(p => p.name).join(", ");

export const stringLength = (str) => str.length;

export const toUpperCase = (str) => str.toUpperCase();

export const formatCurrency = (amount) => `${new Intl.NumberFormat('en-US').format(amount)} VNĐ`;

export const max = (arr) => Math.max(...arr);

export const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

export const repeatString = (str, n) => Array(n).fill(str).join(" ");

export const sumOdd = (arr) => arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);

export const sumGreaterThan = (arr, n) => arr.filter(x => x > n).reduce((a, b) => a + b, 0);

export const formatDate = (dateStr) => dateStr.split("-").reverse().join("/");

export const firstThree = (arr) => arr.slice(0, 3);

export const containsChar = (str, char) => str.includes(char);

export const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

export const countOccurrences = (arr, val) => arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);

export const filterOdd = (arr) => arr.filter(n => n % 2 !== 0);

export const greaterThan = (arr, n) => arr.filter(x => x > n);

export const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

export const separateEvenOdd = (arr) => ({
    even: arr.filter(n => n % 2 === 0),
    odd: arr.filter(n => n % 2 !== 0)
});

export const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

export const sumEvenIndex = (arr) => arr.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0);

export const multiplyByTwo = (arr) => arr.map(n => n * 2);

export const arrayToString = (arr) => arr.join("");