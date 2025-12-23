export const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);

export const countOccurrences = (arr, value) => arr.filter(item => item === value).length;

export const removeDuplicates = (arr) => [...new Set(arr)];

export const flattenArray = (arr) => arr.flat();

export const isSymmetric = (arr) => JSON.stringify(arr) === JSON.stringify([...arr].reverse());

export const findSecondLargest = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1];

export const sortProductsByPrice = (products) => [...products].sort((a, b) => a.price - b.price);

export const findMostExpensiveProduct = (products) => products.reduce((max, p) => p.price > max.price ? p : max);

export const groupByType = (arr) => arr.reduce((acc, { type, name }) => {
    acc[type] = acc[type] || [];
    acc[type].push(name);
    return acc;
}, {});

export const isSubset = (arr1, arr2) => arr2.every(val => arr1.includes(val));

export const findMaxKey = (obj) => Object.entries(obj).reduce((max, [key, val]) => val > max.val ? { key, val } : max, { val: -Infinity }).key;

export const mergeObjectsSumValues = (obj1, obj2) => {
    const result = { ...obj1 };
    for (const [key, val] of Object.entries(obj2)) {
        result[key] = (result[key] || 0) + val;
    }
    return result;
};

export const countElements = (arr) => arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

export const cleanObject = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined));

export const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

export const sumByGroup = (arr) => arr.reduce((acc, { type, price }) => {
    acc[type] = (acc[type] || 0) + price;
    return acc;
}, {});

export const uniqueValues = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

export const isPermutation = (arr1, arr2) => JSON.stringify([...arr1].sort()) === JSON.stringify([...arr2].sort());

export const findLongestString = (arr) => arr.reduce((a, b) => a.length >= b.length ? a : b);

export const intersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

export const filterByMinValue = (arr, minValue) => arr.filter(num => num >= minValue);

export const findLongestValue = (obj) => Object.values(obj).reduce((a, b) => a.length >= b.length ? a : b);

export const groupByFirstLetter = (arr) => arr.reduce((acc, str) => {
    const char = str[0];
    acc[char] = acc[char] || [];
    acc[char].push(str);
    return acc;
}, {});

export const getAdults = (people) => people.filter(p => p.age >= 18);

export const convertToArray = (obj) => Object.entries(obj);

export const sortStringsByLength = (arr) => [...arr].sort((a, b) => a.length - b.length);

export const sumByKey = (arr, key) => arr.reduce((sum, obj) => sum + (obj[key] || 0), 0);

export const countWords = (str) => str.trim().split(/\s+/).length;

export const findMinKey = (obj) => Object.entries(obj).reduce((min, [key, val]) => val < min.val ? { key, val } : min, { val: Infinity }).key;