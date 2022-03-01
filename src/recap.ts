const myName = 'Diego';
const myAge = 12;
myAge;
myName;

const sum = (a: number, b: number) => {
  return a + b;
};
sum(12, 23);

class Person {
  constructor(private age: number, private name: string) {}
  public getSummary() {
    return `My name is ${this.name}, and I'm ${this.age}`;
  }
}

const Diego = new Person(17, 'Diego');
Diego.getSummary();
