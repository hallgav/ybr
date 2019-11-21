var controller = require("./controller");

exports.settings = async (event) => {
  try {
    data = await controller.settings()
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