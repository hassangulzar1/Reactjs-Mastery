// primitives: number, string, boolean
// More complex types: arrays, objects
// Fuunction types, parameters

//Primitives

let age: number;
age = 12.1;

let userName: string | string[];
userName = "Hassan";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbie: string[];
hobbie = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

//! Type inference
let course: string | number = "React - The complete Guide";
course = 12121;

//! Function & Types

function add(a: number, b: number) {
  return a + b;
}
function prinOutput(value: any) {
  console.log(value);
}

//! Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 1);
const stringArray = insertAtBeginning(["a", "b", "c"], "1");

updatedArray[0].split("");
