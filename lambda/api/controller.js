//var _ = require("lodash");
var repo = require("./athena-repo");

exports.applications = async () => {
  return repo.read("select * from test_application");
};
