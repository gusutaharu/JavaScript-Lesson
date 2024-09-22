`use strict`;

{
  class User {
    name;
    _score;
    constructor(name, score){
      this.name = name;
      this._score = score;
    }

    get score() {
      return this._score;
    }

    set score(newValue) {
      if (newValue < 0 || newValue > 100){
        console.log('Invalid value!');
        return;
      }
      this._score = newValue;
    }
  }

  const user = new User('Taro',70);
  user.score = 101;
  console.log(user.score);
}