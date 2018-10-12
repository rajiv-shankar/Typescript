function getSum(num1, num2) {
    return num1 + num2;
}
console.log("getSum:", getSum(1, 6));
// `````````````````````````````````````````````````````````````````````````````
function makeSum(num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log("makeSum:", makeSum("1", 4));
// `````````````````````````````````````````````````````````````````````````````
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
console.log("getName:", getName("John", "Smith"));
console.log("getName:", getName("John"));
// `````````````````````````````````````````````````````````````````````````````
function myVoid() {
    return;
}
