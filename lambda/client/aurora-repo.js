var AWS = require("aws-sdk");

// The Lambda environment variables for the Aurora Cluster Arn, Database Name, and the AWS Secrets Arn hosting the master credentials of the serverless db
var params = sqlStatement => {
  var DBSecretsStoreArn = process.env.DBSecretsStoreArn;
  var DBAuroraClusterArn = process.env.DBAuroraClusterArn;
  var DatabaseName = process.env.DatabaseName;

  return {
    secretArn: DBSecretsStoreArn,
    resourceArn: DBAuroraClusterArn,
    sql: sqlStatement,
    database: DatabaseName
  };
};

exports.exec  = async (sqlStatement) => {
  var RDS = new AWS.RDSDataService({ region: process.env.AwsRegion });

  console.log(sqlStatement); // Log the entire event passed in
  var options = params(sqlStatement);
  console.debug("options = ", options);
  try {
    var response = await RDS.executeStatement(options).promise();
    return response;    
  } catch (error) {
    throw new Error(error.message);  
  }

};


this.exec("select * from ybr.client")

