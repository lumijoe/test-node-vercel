// api/hello.js
const ejs = require('ejs');

module.exports = async (req, res) => {
  const content = ejs.render('<p><%= title %></p>', { title: 'Hello from Vercel Serverless Function!' });
  res.status(200).send(content);
};
