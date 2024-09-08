`use strict`;

{
const n =  Number(prompt('Count?'));
for  (let i = 0; i < n; i++) {
  if (i % 3 === 0) {
    console.log(`--- item ${i} ---`);
  } else {
    console.log(`=== item ${i} ===`)
  }
}
}