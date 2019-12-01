var repo = require('./aurora-repo');

const safeString = (value) => {
  return "'" + value.replace("'", "\'") + "'";
}


exports.getClient = async (clientId) => {

  var sqlStatement = 'SELECT * FROM ybr.client;';

  if (clientId) {
    sqlStatement += 'WHERE client_id = ' + clientId;
  }

  try {
    data = await repo.exec(sqlStatement)
    //ToDo: Reformat record to be Client friendly
    return data.records    
  } catch (error) {
    throw new Error(error.message)
  }
}


exports.getInsertClient = client => {

  var sqlStatement = "";

  try {
    sqlStatement = 'INSERT INTO client (client_name) VALUES (' + safeString(client.clientName) + ')';
  } catch (error) {
    throw new Error(error.message);
  }

  return repo.exec(sqlStatement);
}
