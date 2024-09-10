`use strict`;

{
  const counts = [6, 12,8,15];

  counts.forEach((count)=>{
    // let bar = '';
    // for (let i = 0; i < count; i++){
    //   bar += '*';
    // }
    const bar = '*'.repeat(count);
    console.log(bar);
  })
}