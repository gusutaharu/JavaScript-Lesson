`use strict`;

{
  let count = 3;

  const intervalId = setInterval(()=>{
    console.log(count);
    count--;
    if(count < 0) {
      clearInterval(intervalId);
    }
  },1000)

  console.log(`ID: ${intervalId}`);
}