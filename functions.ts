function getSum(num1:number, num2:number):number {  // specify types of each var incl. return
  return num1 + num2;
}

console.log("getSum:" getSum(1,6));

// `````````````````````````````````````````````````````````````````````````````

function makeSum(num1:any, num2:any):number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 == "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
}

console.log("makeSum:" makeSum("1",4));

// `````````````````````````````````````````````````````````````````````````````

function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + " " + lastName;
}

console.log("getName:" getName("John","Smith"));
console.log("getName:", getName("John"));

// `````````````````````````````````````````````````````````````````````````````

function myVoid3(): void {
  return;
}
