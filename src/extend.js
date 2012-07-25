Array.prototype.last = function() {
    return this[this.length-1];
}

Array.prototype.first = function() {
    return this[0];
}

Number.prototype.isOdd = function() {
    return !!(this % 2);
}

Number.prototype.isEven = function() {
    return !(this % 2);
}
