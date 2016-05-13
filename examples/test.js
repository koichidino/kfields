var kfields = require('../index');

var fieldsStr = 'id,profile,test';
var fields = kfields.parse(fieldsStr);
console.log(fields);
