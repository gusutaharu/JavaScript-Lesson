`use strict`;

{
  // class User {
  //   constructor(nameFromNew, scoreFromNew){
  //     this.name = nameFromNew;
  //     this.score = scoreFromNew;
  //   }
  // }
  class User {
    constructor(name, score){
      this.name = name;
      this.score = score;
    }
  }

  const user1 = new  User('Taro', 70);
  const user2 = new User('Jiro', 80);

  console.log(user1.name);
  console.log(user1.score);
  console.log(user2.name);
  console.log(user2.score);
}