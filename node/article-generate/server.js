const http = require('http');
const fs = require('fs');
const { article, handle, title } = require('./index.js');

handle();

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      let html = fs.readFileSync(__dirname + '/index.html', 'utf-8'); // Change const to let
      const title = article[0]; // Assuming the title is the first element in the article array
      const content = article.slice(1).join('<br/>'); // Rest of the article
      html = html.replace('{{title}}', title).replace('{{article}}', content);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
  } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
  }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
