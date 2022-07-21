import "./App.css";

let name: string = "Guillaume";
let lastName: any = "who cares";
let petName: unknown;

petName = false;

// | makes the possibility to have two types for a variable
let age: number | string;
let isAwesome: boolean = true;
let hobbies: string[] = ["warhammer", "video games", "jesus"];
let role: [number, string] = [5, "something"];

function printName(name: string) {
  console.log(name);
  return name + " ";
}

printName(name);

let testFunction: Function;
let testFunction2: (name: string) => void;
// this function doesn't return anything
let testFunction3: (name: string) => never;

age = 36;

type X = {
  a: string;
  // ? to make the property optionaL
  b?: number;
};

type Y = X & {
  c: string;
  d: number;
};

let y: Y = {
  a: "as",
  c: "as",
  d: 2,
};

let lotsOfPeople: Y[];

interface People extends X {
  name: string;
  age?: number;
}

interface Guy extends People {
  profession: string;
}

type test = People & {
  e: number;
  f: string;
};
