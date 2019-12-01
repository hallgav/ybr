var controller = require("./controller");

exports.client = async event => {
  var clientId = 0;
  try {
    //get ybr parameter value
    clientId = event.pathParameters.clientId;
  } catch (error) {
    console.error("invalid event", event);
    // return {
    //   statusCode: 400,
    //   body: JSON.stringify(error, null, 2)
    // };
  }

  try {
    data = await controller.getClient(clientId);
    //console.debug("data-----", data)
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

