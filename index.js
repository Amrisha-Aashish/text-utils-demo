const { capitalize, slugify, truncate, wordCount } = require('tiny-text-utils');

// A few sample blog posts
const posts = [
  {
    title: 'getting started with node.js in 2026!',
    body: 'Node.js lets you run JavaScript outside the browser. In this post we set up a project, install a package and write our first script.',
  },
  {
    title: 'Crème brûlée: a beginner’s recipe',
    body: 'You only need cream, sugar, eggs and vanilla. Bake slowly, chill well and torch the sugar right before serving.',
  },
  {
    title: '   why small npm packages are useful   ',
    body: 'Small packages do one job well, are easy to test and keep your own code clean.',
  },
];

console.log('=== tiny-text-utils demo ===\n');

for (const post of posts) {
  const title = capitalize(post.title.trim());
  console.log(`Title:    ${title}`);
  console.log(`URL:      https://myblog.dev/posts/${slugify(post.title)}`);
  console.log(`Preview:  ${truncate(post.body, 60)}`);
  console.log(`Words:    ${wordCount(post.body)} (~${Math.max(1, Math.round(wordCount(post.body) / 200))} min read)`);
  console.log('');
}

// Try your own text: node index.js "your text here"
const input = process.argv.slice(2).join(' ');
if (input) {
  console.log('=== your text ===');
  console.log('capitalize:', capitalize(input));
  console.log('slugify:   ', slugify(input));
  console.log('truncate:  ', truncate(input, 20));
  console.log('wordCount: ', wordCount(input));
}
