`use strict`;

{
  class Score {
    constructor(subject, result) {
      this.subject = subject;
      this.result = result;
    }
    
    getScoreString(){
      let grade;
      if (this.result >= 80){
        grade = 'A';
      } else {
        grade = 'B';
      }
      return `${this.subject} ${this.result} ${grade}`;
    }
  }

  class User {
    constructor(name, score){
      this.name = name;
      this.score = score;
    }

    getUserString(){
      return `${this.name} ${this.score.getScoreString()}`;
    }
  }

  const user1 = new User('Taro', new Score('Math', 70));
  const user2 = new User('Jiro', new Score('English', 80));

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}