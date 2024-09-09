`use strict`;

{
  const scores = [70, 90, 80, 75];
  // let max = 0;
  // scores.forEach((score) => {
  //   if( max < score ){
  //     max = score
  //   }
  // });
  // console.log(max);
  console.log(Math.max(...scores));
  console.log(Math.min(...scores));
}