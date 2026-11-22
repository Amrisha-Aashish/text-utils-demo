const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { capitalize, slugify, truncate, wordCount } = require('tiny-text-utils');

const PORT = process.env.PORT || 3000;
const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  // API: /api/transform?text=Hello%20World&max=20
  if (url.pathname === '/api/transform') {
    const text = url.searchParams.get('text') || '';
    const max = Number.parseInt(url.searchParams.get('max') || '30', 10);
    try {
      return sendJson(res, 200, {
        input: text,
        capitalize: capitalize(text),
        slugify: slugify(text),
        truncate: truncate(text, Number.isInteger(max) && max >= 0 ? max : 30),
        wordCount: wordCount(text),
      });
    } catch (err) {
      return sendJson(res, 400, { error: err.message });
    }
  }

  if (url.pathname === '/health') return sendJson(res, 200, { ok: true });

  if (url.pathname === '/' || url.pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(indexHtml);
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`text-utils-demo running at http://localhost:${PORT}`);
});
