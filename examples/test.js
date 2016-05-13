var kfields = require('../index');

var fieldsStr = 'id,profile,test';
var fields = kfields.parse(fieldsStr);

console.log(fields);
var test = kfields.parse(fields);
console.log(test);
