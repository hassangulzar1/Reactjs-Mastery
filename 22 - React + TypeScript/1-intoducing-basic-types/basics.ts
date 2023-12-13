// primitives: number, string, boolean
// More complex types: arrays, objects
// Fuunction types, parameters

//Primitives

let age: number;
age = 12.1;

let userName: string;
userName = "Hassan";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbie: string[];
hobbie = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The complete Guide";
