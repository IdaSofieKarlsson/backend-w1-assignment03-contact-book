
let age: number = 48;
let name: string = 'Ida-Sofie';
let isStudent: boolean = true;

age = 45;

/*
function add1(a: number, b: number): number {
    return a + b;
};
*/
const add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(3, 4));

const greet = (firstName: string): string => {
    return `Hello ${firstName}!`;
};
console.log(greet('Mikael'));

let ages: (string | number | boolean)[] = [41, true, 'Micke'];  //man kan skriva 'let ages: any', dvs anything goes, men det är slarvigt och bad practice
let names: string[] = ['Anna', 'Sara', 'Micke'];
 

function toUppercase (a: string, b?: boolean): string {          //? betyder optional
    return b ? a.toUpperCase() : a;
}
console.log(toUppercase('hello', true));

const nums: number[] = [2, 5, 8];
nums.push(13, 16);
console.log(nums);
const squared: number[] = nums.map((n) => n * n);
console.log(squared);
const evens: number[] = nums.filter((n) => n%2 === 0);
console.log(evens);

interface ContactInfo {
    phone: number, 
    email: string,
    adress?: string
};

interface User {
    id: number, 
    firstName: string, 
    age: number, 
    contactInfo: ContactInfo,
    role: string
};

const users: User = {
    id: 1, 
    firstName: 'Mikael', 
    age: 54, 
    contactInfo: {
        phone: 4672123456, 
        email: 'a@b.c'
    },
    role: 'kk'
};
console.log(users.role);


interface Product {
    id: number, 
    name: string, 
    price: number, 
    tags: string[]
}

const products: Product[] = [
    {id: 1, name: 'laptop', price: 7500, tags: ['work', 'power']}, 
    {id: 2, name: 'mouse', price: 100, tags: ['accessory']}, 
    {id: 3, name: 'keyboard', price: 500, tags: ['accessory', 'work']}
];
const expensiveProducts = products.filter((p) => p.price > 300).map((p) => p.tags);
console.log(expensiveProducts);