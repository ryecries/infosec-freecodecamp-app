const express = require('express');
const helmet = require('helmet');
const app = express();

const hidePoweredBy = require("hide-powered-by");
app.use(hidePoweredBy());

const frameguard = require("frameguard");
app.use(frameguard({ action: "deny" }));

const xXssProtection = require("x-xss-protection");
app.use(xXssProtection());

const dontSniffMimetype = require("dont-sniff-mimetype");
app.use(dontSniffMimetype());

const ienoopen = require("ienoopen");
app.use(ienoopen());

const strictTransportSecurity = require("hsts");
ninetyDaysInSeconds = 90*24*60*60;
app.use(
  strictTransportSecurity({
    maxAge: ninetyDaysInSeconds, 
  })
);




































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
