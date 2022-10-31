const sayHello = (person) => {
    console.log(person.name);
};

const borcho = {
    name: 'Borcho',
};
sayHello(borcho);
const test = (a, b) => {
    return a + b;
};

export { test };
