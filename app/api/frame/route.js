// Simple test version first
const jokes = [
  { setup: 'Why did the scarecrow become a motivational speaker?', punchline: 'Because he was outstanding in his field!' },
  { setup: 'Why don\'t eggs tell jokes?', punchline: 'They\'d crack up!' },
  { setup: 'What do you call a bear with no socks on?', punchline: 'Barefoot!' },
  { setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
  { setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything!' }
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export async function GET() {
  const joke = getRandomJoke();
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://via.placeholder.com/600x400/4a5568/ffffff?text=${encodeURIComponent(joke.setup + ' ' + joke.punchline)}" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="Next Joke" />
  <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/frame" />
</head>
<body>
  <h1>Random Joke Frame</h1>
  <p>${joke.setup}</p>
  <p><strong>${joke.punchline}</strong></p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}

export async function POST() {
  const joke = getRandomJoke();
  
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://via.placeholder.com/600x400/4a5568/ffffff?text=${encodeURIComponent(joke.setup + ' ' + joke.punchline)}" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="Next Joke" />
  <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/frame" />
</head>
<body>
  <h1>Random Joke Frame</h1>
  <p>${joke.setup}</p>
  <p><strong>${joke.punchline}</strong></p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}