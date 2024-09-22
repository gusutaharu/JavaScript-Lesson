`use strict`;

{
  class User {
    name;
    score;
    constructor(name, score){
      this.name = name;
      this.score = score;
    }

    get score() {

    }

    set score() {
    }
  }

  const user = new User('Taro',70);
  user.score = 100;
  console.log(user.score);
}