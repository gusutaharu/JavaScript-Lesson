`use strict`;

{
  let start = 'Tokyo';
  let goal = 'Osaka';

  // start = goal; //start = Osaka
  // goal = start; //goal = start = Osaka

  // let temp = '';
  // temp = start;
  // start = goal;
  // goal = temp;

  [goal, start] = [start, goal];

  console.log(start);
  console.log(goal);
}