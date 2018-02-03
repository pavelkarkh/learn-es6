class Task {

    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this._completed = false;

        // static variable
        Task.count += 1;
    }

    get completed() {
        return this._completed ? 'Completed' : 'Not completed';
    }

    set completed(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._completed = value;
        } else {
            console.error('Only true or false value');
        }
    }

    complete() {
        this.completed = true;
    }

    info() {
        console.log(`[${ this._completed ? 'V' : ' ' }] ${this._title}`);
    }

    // static method
    static getDefaultTitle() {
        return 'Task';
    }
}

Task.count = 0;
let task1 = new Task('buy milk');
task1.info();
task1.complete(true);
task1.info();
let task2 = new Task('make somthing');
let task3 = new Task();

console.log('Task count = ' + Task.count);
task3.info();

console.log(task3.completed);

task3.completed = true;
console.log(task3.completed);