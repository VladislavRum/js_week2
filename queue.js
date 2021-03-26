function Queue() {
    this.queue = {};
    this.start = 0;
    this.end = 0;
}

Queue.prototype.enqueue = function(element) {
    this.queue[this.start++] = element;
}

Queue.prototype.dequeue = function() {
    this.queue[this.end++] = element;
}