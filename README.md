# text-utils-demo


Live deployed link: https://text-utils-demo.onrender.com/

A small web app that demonstrates the [`tiny-text-utils`](https://github.com/Amrisha-Aashish/tiny-text-utils) npm package.

Type any text and the server runs it through `capitalize`, `slugify`, `truncate` and `wordCount`.

**Live demo:** _add your Render link here_

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## API

`GET /api/transform?text=Hello%20World&max=20`

```json
{ "input": "Hello World", "capitalize": "Hello World", "slugify": "hello-world", "truncate": "Hello World", "wordCount": 2 }
```
