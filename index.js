
exports.parse = function(fieldsStr) {
  if (fieldsStr) {
    var fieldArray = fieldsStr.split(",");

    return fieldArray;
  } else {
    throw new Error('Missing fieldsStr in getFields function.');
  }
}
