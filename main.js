`use strict`;

{
  const counts = [6, 12,8,15];

  counts.forEach((count)=>{
    const bar = '*'.repeat(count);
    // const label = String(count).padStart(2, ' ');
    const label = String(count).padEnd(2, ' ');
    console.log(`${label}: ${bar}`);
  })
}