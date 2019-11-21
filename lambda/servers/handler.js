var controller = require("./controller");

exports.servers = async (event) => {
  let ybrId = 0;
  try {
    //get ybr parameter value
    ybrId = event.pathParameters.ybrId;
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error, null, 2)
    };
  }
  try {
    data = await controller.getServers(ybrId)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data, null, 2)
    };
  }   
  catch (error) {
    return  {
      statusCode: 400,
      body: JSON.stringify(error, null, 2)
    };
  
  }
}