let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;  // can be anything

let strArr1: string[];
let numArr1: number[];
let boolArr1: boolean[];

let strArr2: Array<string>;
let numArr2: Array<number>;
let boolArr2: Array<boolean>;

let strNumTuple: [string, number];  // has to match this order exactly

myString = "Hello world".slice(0,5) + "!";
myNum = 0xf00d;
myBool = true;
strNumTuple = ["Hello", 4]

console.log(strNumTuple);
