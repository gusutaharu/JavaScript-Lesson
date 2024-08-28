`use strict`;


// let command = Number(prompt('Menu 1, 2, 3 or 0 exit'));

// while (command !== 0) {
//   console.log(`Menu ${command} processed`);
//   command = Number(prompt('Menu 1, 2, 3 or 0 exit'));
// }

let command;

do {
  command = Number(prompt('Menu 1, 2, 3 or 0 exit'));
  if(command === 0){
    console.log('Exited');
  }else {
    console.log(`Menu ${command} processed`)
  }
} while ( command !== 0);