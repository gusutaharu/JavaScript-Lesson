`use strict`;

{
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');
  let timeoutId;

  function showClock(){
    timeoutId = setTimeout(() => {
      pElement.textContent = new Date();
      showClock();
    }, 1000);
  }

  buttonElement.addEventListener('click',()=>{
    clearTimeout(timeoutId);
  })

  showClock();
}