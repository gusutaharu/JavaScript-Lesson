`use strict`;

{
  
  let isDevMOde  = true;
  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');

  buttonElement.addEventListener('click', ()=>{
    if (confirm('Are you sure?')) {
      if (isDevMOde) {
        pElement.textContent  = 'Dev Mode is Off';
        // isDevMOde  = false;
      } else {
        pElement.textContent = 'Dev Mode is On';
        // isDevMOde = true;
      }
      isDevMOde = !isDevMOde
    }
  })
}