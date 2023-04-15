import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello world\n');
})

server.listen(3000, () => {
  console.log('listening on port 3000');
});