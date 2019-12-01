//var _ = require("lodash");
var repo = require("./aurora-repo");



exports.getYbr = async (ybrId) => {
  try {
    const result = await repo.read();

    const output = result.map(r => {
      return [
        r
      ];
    });
    return output;
  } 
  catch (error) {
    throw new Error(error);
  }
};
