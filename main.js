`use strict`;

// const command = Number(prompt('Menu 1, 2, 3 or 0 exit'));
// console.log(`Menu ${command} processed`);

let command = Number(prompt('Menu 1, 2, 3 or 0 exit'));

while (command !== 0) {
  console.log(`Menu ${command} processed`);
  command = Number(prompt('Menu 1, 2, 3 or 0 exit'));
}