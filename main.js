`use strict`;

{
  setTimeout(() => {
    console.log(new Date());
    setTimeout(() => {
      console.log(new Date());
      setTimeout(() => {
        console.log(new Date());
      }, 1000);
    }, 1000);
  }, 1000);
}