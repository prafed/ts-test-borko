export type Person = {
  name: string;
};

export const sayHello = (person: Person): void => {
  console.log(person.name);
};
