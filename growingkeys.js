growingkeys = (num, string="tucker") => {
  let object = {};
  let newkey = string;
  for (var i = 0; i < num - 1; i++) {
    newkey += string;
  }
  object[newkey] = true;
  return object;
};

module.exports = growingkeys;
