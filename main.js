`use strict`;

{
  class User {
    name;
    #score;
    constructor(name, score){
      this.name = name;
      this.#score = score;
    }

    get score() {
      return this.#score;
    }

    set score(newValue) {
      if (newValue < 0 || newValue > 100){
        console.log('Invalid value!');
        return;
      }
      this.#score = newValue;
    }
  }

  const user = new User('Taro',70);
  user.#score = 101;
  console.log(user.score);
}