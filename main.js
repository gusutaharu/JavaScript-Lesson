`use strict`;

{
  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email)=>{
    // if (email.includes('taro') === true){
    //   console.log(email);
    // }
    // if  (email.indexOf('taro') === 0){
    //   console.log(email);
    // }
    if (email.startsWith('taro') === true){
      console.log(email);
    }
  });
}