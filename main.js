`use strict`;

{
  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email)=>{
    //console.log(email.replace('@example.com', ''))
    const items = email.split('@');
    console.log(items[0])
  });
}