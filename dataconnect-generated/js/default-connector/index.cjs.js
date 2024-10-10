const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'nanny-react-ts-sass',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

