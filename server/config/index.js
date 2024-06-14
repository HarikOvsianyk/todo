const configValues = require('./config');

module.exports = {
    getDBConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@nodetododb.49w14f4.mongodb.net/?retryWrites=true&w=majority&appName=nodetodoDB`
    }
}