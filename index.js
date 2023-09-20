// Iteration 1: Names and Input
const hacker1 = "Rony";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Elena";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
const driversNameLength = hacker1.length;
const navigatorsNameLength = hacker2.length;

if (driversNameLength > navigatorsNameLength) {
  console.log(
    `The driver has the longest name, it has ${driversNameLength} characters.`
  );
} else if (navigatorsNameLength > driversNameLength) {
  console.log(
    ` It seems that the navigator has the longest name, it has ${navigatorsNameLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorsNameLength} characters!`
  );
}

// Iteration 3: Loops
//  3.1
let driverNameSpelled = "";
for (let i = 0; i < driversNameLength; i++) {
  const letter = hacker1[i].toUpperCase() + " ";
  driverNameSpelled += letter;
}

console.log(driverNameSpelled);
