//var _ = require("lodash");
var repo = require("../repositories/athena-repo");

exports.settings = async () => {
  try {
    const result = await repo.read("select * from test_setting_dev");

    const output = result.map(r => {
      return [
        r["app/ vendor"],
        r["version (if applicable)"],
        r.vendor,
        r.descr,
        r.platform,
        r.hosting,
        r["6r"],
        r.notes,
        r.status,
        r.assignee
      ];
    });
    return output;
  } 
  catch (error) {
    throw new Error(error);
  }
};
