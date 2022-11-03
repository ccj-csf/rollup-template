var Queue = /** @class */ (function () {
    function Queue() {
        // 跟踪最后一个元素的位置
        this.count = 0;
        // 跟踪第一个元素的位置
        this.lowestCount = 0;
        this.items = [];
    }
    // 从队尾添加元素
    Queue.prototype.enqueue = function (element) {
        this.items[this.count++] = element;
    };
    Queue.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    // 移除队列头的第一个元素
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    // 查看队列头的元素
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = [];
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "".concat(this.items[this.lowestCount]);
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = "".concat(objString, ",").concat(this.items[i]);
        }
        return objString;
    };
    return Queue;
}());

var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.items = {};
    }
    // 只能一次添加一个元素
    Stack.prototype.push = function (element) {
        this.items[this.count++] = element;
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        // 获取最后最后一个元素的 index
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    Stack.prototype.clear = function () {
        this.items = [];
        this.count = 0;
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "".concat(this.items[0]);
        for (var i = 1; i < this.count; i++) {
            objString = "".concat(objString, ",").concat(this.items[i]);
        }
        return objString;
    };
    return Stack;
}());

var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.validateMobile = function (value) {
        return this.mobile.test(value);
    };
    Validator.validatePlane = function (value) {
        return this.plane.test(value);
    };
    Validator.mobile = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
    Validator.plane = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;
    return Validator;
}());

export { Queue, Stack, Validator };
