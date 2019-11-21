//var _ = require("lodash");
var repo = require("./athena-repo");

exports.getServers = async (ybrId) => {
  try {
    const result = await repo.read("select * from ybr.test_server_dev limit 100");

    console.log("First result ", result[0])

    const output = result.map(r => {
      return [
        r["name"],
        r["hostedapplication"],
        r["dc"],
        r["power on or off"],
        r["folderpath"],
        r["guestos"],
        r["environment deliniation"],
        r["biz group exp"],
        r["tpm"],
        r["bpo"],
        r["totalvcpu"],
        r["corespersocket"],
        r["totalsockets"],
        r["memorygb"],
        r["diskallocationgb"],
        r["6 r"],
        r["reasoning"]
      ];
    });
    return output;
  } 
  catch (error) {
    throw new Error(error);
  }
};
