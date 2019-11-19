//var _ = require("lodash");
var repo = require("./athena-repo");

exports.applications = async () => {
  console.log("Starting Controller")
  try {
    const data = await repo.read("select * from test_application");
    console.log("Row Count: ", data.length);
    console.log("DATA: ", data);
  } catch (e) {
    console.log("ERROR: ", e);
  }
};
