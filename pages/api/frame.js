// Traditional Pages Router API route
const jokes = [
  { setup: 'Why did the scarecrow become a motivational speaker?', punchline: 'Because he was outstanding in his field!' },
  { setup: 'Why don\'t eggs tell jokes?', punchline: 'They\'d crack up!' },
  { setup: 'What do you call a bear with no socks on?', punchline: 'Barefoot!' },
  { setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
  { setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything!' },
  { setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
  { setup: 'Why did the coffee file a police report?', punchline: 'It got mugged!' },
  { setup: 'What\'s orange and sounds like a parrot?', punchline: 'A carrot!' },
  { setup: 'Why don\'t skeletons fight each other?', punchline: 'They don\'t have the guts!' },
  { setup: 'What do you call a sleeping bull?', punchline: 'A bulldozer!' }
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export default function handler(req, res) {
  const joke = getRandomJoke();
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://placehold.co/600x400/4a5568/ffffff.png?text=${encodeURIComponent(joke.setup + ' - ' + joke.punchline)}" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="Next Joke" />
  <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/frame" />
  
  <meta property="og:title" content="Random Joke Frame" />
  <meta property="og:description" content="${joke.setup} ${joke.punchline}" />
  <meta property="og:image" content="https://placehold.co/600x400/4a5568/ffffff.png?text=${encodeURIComponent(joke.setup + ' - ' + joke.punchline)}" />
  <title>Random Joke Frame</title>
</head>
<body>
  <h1>🎭 Random Joke Frame</h1>
  <p><strong>Setup:</strong> ${joke.setup}</p>
  <p><strong>Punchline:</strong> ${joke.punchline}</p>
  <p><a href="/api/frame">Get another joke</a></p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}