class MyClass {
  constructor(c) {
    this.c = +c;
  }
}

const example1 = new MyClass("123");
console.log(example1.c); // 123 (number)

const example2 = new MyClass(true);
console.log(example2.c); // 1 (number)

const example3 = new MyClass(null);
console.log(example3.c); // 0 (number)

const example4 = new MyClass(undefined);
console.log(example4.c); // NaN (number)
