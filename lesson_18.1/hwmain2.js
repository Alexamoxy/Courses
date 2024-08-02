const myNum = 10;
const myStr = "some string";
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
  first: "First Name",
  last: "Last Name",
};

const decimal2 = myNum.toFixed(2);
console.log(decimal2); // Виведе "10.00"

let i = 0;

console.log(++i); // Префіксний інкремент: спочатку збільшення, потім використання. Виведе 1
console.log(i++); // Постфіксний інкремент: спочатку використання, потім збільшення. Виведе 1
console.log(i); // Виведе 2

console.log(--i); // Префіксний декремент: спочатку зменшення, потім використання. Виведе 1
console.log(i--); // Постфіксний декремент: спочатку використання, потім зменшення. Виведе 1
console.log(i); // Виведе 0

let myTest = 20;

myTest += myNum;
console.log(myTest); // Виведе 30

myTest -= 5;
console.log(myTest); // Виведе 25

myTest *= 2;
console.log(myTest); // Виведе 50

myTest /= 5;
console.log(myTest); // Виведе 10

myTest %= 3;
console.log(myTest); // Виведе 1

const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.random() * 10;
const myPow = Math.pow(3, 5);

console.log(myPi); // Виведе значення Pi
console.log(myRound); // Виведе 89
console.log(myRandom); // Випадкове число між 0 і 10
console.log(myPow); // Виведе 243 (3^5)

const strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length,
};

console.log(strObj);

const isRamaPos = strObj.str.indexOf("рама");
const isRama = isRamaPos !== -1;

console.log(isRamaPos); // Виведе 10 (позиція першого входження 'рама')
console.log(isRama); // Виведе true (бо 'рама' є в рядку)

const strReplace = strObj.str.replace(
  "мыла раму, рама мыла",
  "моет раму, Рама держит"
);
console.log(strReplace); // Виведе 'Мама моет раму, Рама держит маму'

const someStr = "some STRING";
const upperStr = someStr.toUpperCase();
const lowerStr = someStr.toLowerCase();

console.log(upperStr); // Виведе 'SOME STRING'
console.log(lowerStr); // Виведе 'some string'
