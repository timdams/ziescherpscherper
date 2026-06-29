const { scene } = require('./prop');
scene({ privSet: true }).save(__dirname, 'readonlypriv', 'NEW');
