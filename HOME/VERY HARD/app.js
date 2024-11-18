class Person {
    constructor(name, job, age) {
        this.name = name
        this.job = job
        this.age = age;     
    }

    exercise() {
        return "Running is fun! - said no one ever"
    }

    fetchJob() {
        return `${this.name} is a ${this.job}`
    }
}

class Programmer extends Person {
    constructor(name, job, age, lang) {
        super(name, job, age)
        this.lang = lang;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if(this.busy) {
            console.log(`${this.name} can't accept any task right now`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility`);
        }
    }
}


const person1 = new Person('bk', 'r2h', 24)
const person2 = new Programmer("nate", "apprentice", 19, 'JavaScript')