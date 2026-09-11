//print
console.log("Hello, TypeScript!");

//let declaration
let x: number = 10;
console.log(`The value of x is: ${x}`);
x = 30;
console.log(`The value of x is: ${x}`);

//constant declaration
const y: number = 20;
console.log(`The value of y is: ${y}`);

//variable declarationclear
var welcomeMessage: string = "Welcome to TypeScript!";
console.log(welcomeMessage);

//Class declaration
class Hello {
    //Method declaration
    m1(): void {
        console.log("M1 Executed");
    }
    m2(): void {
        console.log("M2 Executed");
    }
    m3(): void {
        console.log("M3 Executed");
    }

}

//Object creation
let m = new Hello();
//Method calling
m.m2();
m.m1();
m.m3();

//data types in typescript
//PRIMITIVE DATA TYPES
//string
let academyName: string = "Suresh IT Academy";
console.log(`Hello, ${academyName}!`);
//number
let age: number = 30;
let price: number = 19.99;
let hex: number = 0x1a;
let binary: number = 0b1010;
let octal: number = 0o12;
console.log(age);
console.log(price);
console.log(hex);
console.log(binary);
console.log(octal);

//boolean
let a: boolean = true;
let b: boolean = false;
console.log(a);
console.log(b);

//null and undefined
let c: null = null;
let d: undefined;
console.log(c);
console.log(d);

//object data type/ non-primitive data type
//objects

let person: object = { name: "Alia", age: 30 };
console.log(person);

//ARRAYS
let n: number[] = [1, 2, 3, 4, 5];
let s: string[] = ["Apple", "Banana", "Flower"];
console.log(n);
console.log(s);

//TUPLE
let tuple: [string, number] = ["Hello", 42];
console.log(tuple);

//special data type - any
let value: any = "Hello";
console.log(value);
value = 42;
console.log(value);

//variables in typescript
