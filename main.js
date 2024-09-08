`use strict`;

{
const n =  Number(prompt('Yen?'));
const amount = (n / 138.91).toFixed(2);
console.log(`USD: ${Number(amount).toLocaleString()}`);
}