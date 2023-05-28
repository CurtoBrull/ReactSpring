
let name = 'John Doe';
name = 'Jane';

const LAST_NAME = 'Doe';

// Contexto variables
if (true) {
    let name = 'John';
    const LAST_NAME = 'Doe2';
    console.log(name + ' ' + LAST_NAME);
}

console.log('Hello World! ' + name + ' ' + LAST_NAME);

console.log(`Hello 
            World! 
    ${name} 
            ${LAST_NAME}`)
