let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let next = iterator.next();
while(!next.done) {
    console.log(next.value);
    next =  iterator.next();
}

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;
                return {
                    value,
                    done
                };
            }
        };
    }
}

for (let id of idGenerator) {
    console.log(id);
}

class ArrayIterator {
    constructor(arr = []) {
        this.array = arr;
        this.index = 0;
    }

    next() {
        let res = {value: undefined, done: true};

        if (this.index < this.array.length) {
            res.value = this.array[this.index];
            res.done = false;
            this.index++;
        }

        return res;
    }
}

class TaskList {
    constructor() {
        this.taskList = [];
    }

    addTasks(...arr) {
        this.taskList = this.taskList.concat(arr);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.taskList);
    }
}

let taskList = new TaskList();
taskList.addTasks('task 1', 'task 2', 'task 3');

for (let task of taskList) {
    console.log(task);
    
}
