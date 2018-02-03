'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this._title = title;
        this._completed = false;

        // static variable
        Task.count += 1;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.completed = true;
        }
    }, {
        key: 'info',
        value: function info() {
            console.log('[' + (this._completed ? 'V' : ' ') + '] ' + this._title);
        }

        // static method

    }, {
        key: 'completed',
        get: function get() {
            return this._completed ? 'Completed' : 'Not completed';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._completed = value;
            } else {
                console.error('Only true or false value');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task';
        }
    }]);

    return Task;
}();

Task.count = 0;
var task1 = new Task('buy milk');
task1.info();
task1.complete(true);
task1.info();
var task2 = new Task('make somthing');
var task3 = new Task();

console.log('Task count = ' + Task.count);
task3.info();

console.log(task3.completed);

task3.completed = true;
console.log(task3.completed);