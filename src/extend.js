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
    return !!(this % 2);
}

Number.prototype.isEven = function() {
    return !(this % 2);
}

Number.prototype.greaterThan = function(num) {
    return this > num;
}

Number.prototype.smallerThan = function(num) {
    return this < num;
}

/**
 * Is array contains requested char or string.
 * @param {string | number} char is requested string. 
 * @return {Number}
 */
String.prototype.contains = function(char) {
    return this.indexOf(char) != -1;
};

/**
 * Returns count of requested param. 
 *
 * @param {string | number} char is requested string. 
 * @param {Boolean=} cs is case sensitive. 
 * @return {Number} 
 */
String.prototype.wordCount = function(char, cs) {
    if (cs) 
        return this.toLowerCase().split(char.toLowerCase()).length - 1;
    else
        return this.split(char).length - 1;
};
