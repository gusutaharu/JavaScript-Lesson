`use strict`;

{
  function showHeader(){
    console.log('Header');
  }

  async function showUsers(){
    const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
    const users = await response.json();
    console.log(users);
  }

  function showFooter(){
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();
}