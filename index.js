// Iteration 1: Names and Input
const hacker1 = 'Rony';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Elena';
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
let driverNameSpelled = '';
for (let i = 0; i < driversNameLength; i++) {
  const letter = hacker1[i].toUpperCase() + ' ';
  driverNameSpelled += letter;
}

console.log(driverNameSpelled);

// 3.2
let navigatorNameReversed = '';
for (let i = navigatorsNameLength - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}

console.log(navigatorNameReversed);

// 3.3

const compareNames = hacker1.localeCompare(hacker2);

if (compareNames === 1) {
  console.log('Yo, the navigator goes first, definitely.');
} else if (compareNames === -1) {
  console.log('The driver`s name goes first.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1:
const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque posuere est sit amet rhoncus. Sed pellentesque a felis sit amet sollicitudin. Pellentesque commodo neque eros, id sodales eros malesuada ut. Nulla sed felis at lorem eleifend dapibus. Etiam viverra tellus vel sapien aliquet, id placerat nunc iaculis. Duis consectetur fringilla ligula, a dapibus mi efficitur vel. Sed luctus, lorem sit amet dapibus pharetra, risus purus imperdiet odio, et egestas magna leo et purus. Vivamus eu eros iaculis, mattis ex a, tristique nunc. Vestibulum a sapien a dolor lobortis egestas. Sed placerat tellus id ultrices hendrerit. Etiam fermentum nunc in tortor euismod, vitae interdum odio ultrices. Curabitur condimentum ante tellus. Nulla facilisi. Donec accumsan tincidunt justo iaculis pulvinar. Nulla eu fermentum felis. Etiam id metus massa. Quisque bibendum elit quis mi porttitor pulvinar. Nulla placerat turpis est, quis semper dui ornare facilisis. Proin ac elementum diam. Aliquam consectetur arcu vitae tempus varius. Fusce placerat bibendum arcu, ut consectetur tortor venenatis et. Ut magna ante, euismod sit amet neque eget, pretium ullamcorper tellus. Morbi tempor vehicula leo finibus tristique. Phasellus a malesuada odio, id imperdiet quam. Vestibulum lobortis odio nisl, cursus dictum orci viverra tincidunt. Praesent tempus augue metus, et convallis felis varius vitae. Curabitur eu laoreet dui, eu ultrices massa.';

function charactersCounter(char) {
  let counter = 0;

  for (let i = 0; i < longText.length; i++) {
    if (longText[i] === char) {
      counter++;
    }
  }
  counter += 1;

  console.log(counter);
}

charactersCounter(' ');

let etCounter = 0;

for (let i = 0; i < longText.length; i++) {
  const char = ' ' + longText[i] + longText[i + 1] + ' ';
  const charWithComma = ' ' + longText[i] + longText[i + 1] + ',';

  if (char === ' et ' || charWithComma === ' et,') {
    etCounter++;
  }
}

console.log(etCounter);
