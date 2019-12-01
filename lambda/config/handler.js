var config = require("./reference/ui-lists");

exports.config = async event => {
  console.log("in config api");
  let refId = "";
  try {
    //get ybr parameter value
    refId = event.pathParameters.refId;
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error, null, 2)
    };
  }

  console.log("got refid   " + refId);

  try {
    var data = {};
    switch (refId) {
      case "assesmentStatus":
        data = config.assesmentStatus;
        break;
      case "6R":
        data = config.sixRs;
        break;
      default:
        data = config;
    }
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error, null, 2)
    };
  }
};
