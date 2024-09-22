`use strict`;

{
  function showHeader(){
    console.log('Header');
  }

  function showUsers(){
    const response = fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
    console.log(response);
  }

  function showFooter(){
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();
}