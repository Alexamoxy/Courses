// 1. Функція для генерації випадкових чисел
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Використання функції getRandomInt
console.log(getRandomInt(1, 10)); // Випадкове число від 1 до 10
console.log(getRandomInt(40, 50)); // Випадкове число від 40 до 50
console.log(getRandomInt(1, 100)); // Випадкове число від 1 до 100

// 2. Функція для сумування великих чисел
function sumBigIntegers(numStr1, numStr2) {
  const bigInt1 = BigInt(numStr1);
  const bigInt2 = BigInt(numStr2);
  return bigInt1 + bigInt2;
}

// Використання функції sumBigIntegers
console.log(sumBigIntegers("9007199254740991", "9007199254740991")); // 18014398509481982n

// 3. Функція для привітання з іменем
function greet(msg, name) {
  return `${msg}, ${name}`;
}

// Використання функції greet
console.log(greet("Hi", "John")); // Hi, John
console.log(greet("Hey", "Bob")); // Hey, Bob
console.log(greet("Hello", "Mary")); // Hello, Mary
