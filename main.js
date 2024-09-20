`use strict`;

{
  class User {
    name;
    score;
    static count = 0;
    constructor(name, score){
      this.name = name;
      this.score = score;
      User.count++;
    }

    getUserString(){
      return `${this.name} ${this.score}`;
    }
  }

  // let count = 0;
  const user1 = new User('Taro',70);
  // count++;
  const user2 = new User('Jiro',80);
  // count++;
  console.log(User.count);

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}