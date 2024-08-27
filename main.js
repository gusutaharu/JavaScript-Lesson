`use strict`;

const score = Number(prompt("Score?"));

if (score >= 90) {
  console.log('A!');
} else if (score >= 70) {
  console.log('B!')
} else {
  console.log('C')
}