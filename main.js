`use strict`;

{
  class Score {
    constructor(subject, result) {
      this.subject = subject;
      this.result = result;
    }
    
    getGrade(){
      return this.result >= 80 ? 'A' : 'B';
    }

    getScoreString(){
      return `${this.subject} ${this.result} ${this.getGrade()}`;
    }
  }

  class MathScore extends Score {
    constructor(result) {
      super('Math', result)
    }
    getGrade(){
      return this.result >= 50 ? 'A' : 'B';
    }
  }

  class EnglishScore extends Score {
    constructor(result) {
      super('English', result)
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

  const user1 = new User('Taro', new MathScore(70));
  const user2 = new User('Jiro', new EnglishScore(80));

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}