// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT,
  );
});
