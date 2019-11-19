var controller = require("./controller");

exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: 'Authenticated call!'
  }
}

exports.applications = async (event) => {
  try {
    data = await controller.applications()
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