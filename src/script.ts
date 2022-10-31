import { sayHello, type Person } from './lib';

const borcho: Person = {
  name: 'Borcho',
};

sayHello(borcho);

export const test = (a: number, b: number): number => {
  return a + b;
};
