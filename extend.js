Array.prototype.last = function() {
    return this[this.length-1];
}

Array.prototype.first = function() {
    return this[0];
}

String.prototype.toNumber = function() {
    return Number(this);
}

Number.prototype.isOdd = function() {
    return this % 2 == 1 ? true : false;
};

Number.prototype.isEven = function() {
    return this % 2 == 0 ? true : false;
};