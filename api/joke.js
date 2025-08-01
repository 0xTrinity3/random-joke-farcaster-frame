const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why did the coffee file a police report? It got mugged!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why did the bicycle fall over? Because it was two-tired!"
];

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get a random joke
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        
        // Create image URL with the joke
        const imageUrl = `https://placehold.co/600x400/4a5568/ffffff.png?text=${encodeURIComponent(randomJoke)}`;
        
        // Return HTML with new frame
        const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta property="fc:frame" content="vNext">
    <meta property="fc:frame:image" content="${imageUrl}">
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
    <meta property="fc:frame:button:1" content="Next Joke">
    <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/joke">
    <title>Random Joke Frame</title>
</head>
<body>
    <h1>🎭 Random Joke Frame</h1>
    <p>${randomJoke}</p>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
        
    } catch (error) {
        console.error('Error generating joke:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}