import { NextResponse } from 'next/server';

// Array of simple jokes
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

// Function to get a random joke
function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export async function GET() {
  const joke = getRandomJoke();
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const imageUrl = `${baseUrl}/api/og?setup=${encodeURIComponent(joke.setup)}&punchline=${encodeURIComponent(joke.punchline)}`;

  return new Response(
    `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${imageUrl}" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:button:1" content="Next Joke" />
      <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
    </head>
    <body>
      <h1>Random Joke Frame</h1>
      <p>${joke.setup}</p>
      <p><strong>${joke.punchline}</strong></p>
    </body>
    </html>
    `,
    {
      headers: { 'Content-Type': 'text/html' },
    }
  );
}

export async function POST() {
  const joke = getRandomJoke();
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const imageUrl = `${baseUrl}/api/og?setup=${encodeURIComponent(joke.setup)}&punchline=${encodeURIComponent(joke.punchline)}`;

  return new Response(
    `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${imageUrl}" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:button:1" content="Next Joke" />
      <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
    </head>
    <body>
      <h1>Random Joke Frame</h1>
      <p>${joke.setup}</p>
      <p><strong>${joke.punchline}</strong></p>
    </body>
    </html>
    `,
    {
      headers: { 'Content-Type': 'text/html' },
    }
  );
}