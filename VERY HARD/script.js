class Person {
    name;
    job;
    age;

    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}



class Programmer extends Person {
  
    languages = [];
    #busy;

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages.push(...languages);
        this.#busy = true;
    }
   
    completeTask() {
        this.#busy = false;
    }

    offerNewTask() {
       if(this.#busy) {
        console.log(`${this.name} can't accept any new task right now.`);
       } else {
        console.log(`${this.name} would love to take on a new responsibility.`)
       }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguage() {
        // this.languages.forEach(language => console.log(language))
        return this.languages
    }

}


const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();
