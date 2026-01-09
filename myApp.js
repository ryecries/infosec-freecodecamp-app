const express = require('express');
const helmet = require('helmet');
// const nocache = require("nocache");
const app = express();

// app.use(nocache());


app.use(helmet({
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'trusted-cdn.com'],
    }
  },
  noCache: true,               // enable
}))








module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
