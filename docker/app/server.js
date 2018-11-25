//Load express module with `require` directive
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World with docker-compose!\n');
});

//Launch listening server on port 8081
app.listen(PORT, function () {
  console.log(`Running on http://${HOST}:${PORT}`)
})

