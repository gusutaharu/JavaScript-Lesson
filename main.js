`use strict`;

{
  class User {
    constructor(name, score){
      this.name = name;
      this.score = score;
    }

    getUserString(){
      return `${this.name} ${this.score}`;
    }
  }

  const user1 = new User('Taro', 70);
  const user2 = new User('Jiro', 80);

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}