
exports.parse = function(input, options) {
  if (typeof input === 'string') {
    var fieldArray = input.split(",");

    return fieldArray;
  } else if (input instanceof Array) {
    return input;
  } else {
    // 要求throw error時才會丟Exception
    if (options && options.throwError) {
      throw new Error('Missing input in field parse function.');
    }
    return [];
  }
}
