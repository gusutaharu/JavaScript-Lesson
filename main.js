`use strict`;

{
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');

  function showClock(){
    setTimeout(() => {
      pElement.textContent = new Date();
      showClock();
    }, 1000);
  }

  showClock();
}