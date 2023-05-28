
function sayHello(name) {
    const greeting = 'Hello';
    return greeting + ' ' + name;
}

const result = sayHello('John Doe');

console.log(result);

// Arrow functions
const sayHello2 = (name = 'NombreDefault', age = 10) => `Hello ${name}, ${age} years old`

const result2 = sayHello2('JCB', 44);

console.log(result2);

const add = (a = 0, b = 0) => a + b;

const result3 = add(111, 222);
console.log(result3);
