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

// Type inference
let course: string | number = "React - The complete Guide";
course = 12121;
