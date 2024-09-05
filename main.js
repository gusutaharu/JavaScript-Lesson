`use strict`;

{
  document.querySelector('button').addEventListener('click',()=>{
    const colors = [];
    document.querySelectorAll('input').forEach((checkebox) => {
      if (checkebox.checked === true) {
        colors.push(checkebox.value);
      }
    });
    alert(colors.join(','));
  });
}