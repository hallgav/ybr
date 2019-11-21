//var _ = require("lodash");
var repo = require("../repositories/athena-repo");

exports.getYbr = async (ybrId) => {
  try {
    const result = await repo.read("select * from test_ybr_dev where ybrId = '" + ybrId + "'" );

    const output = result.map(r => {
      return [
        // r["app/ vendor"],
        // r["version (if applicable)"],
        // r.vendor,
        // r.descr,
        // r.platform,
        // r.hosting,
        // r["6r"],
        // r.notes,
        // r.status,
        // r.assignee
      ];
    });
    return output;
  } 
  catch (error) {
    throw new Error(error);
  }
};
