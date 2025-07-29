const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "I used to hate facial hair, but then it grew on me.",
    "What do you call a fake noodle? An impasta!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    "I invented a new word: Plagiarism!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "I'm terrified of elevators, so I take steps to avoid them.",
    "Why don't oysters donate? Because they are shellfish!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I used to be a banker, but I lost interest.",
    "Why did the coffee file a police report? It got mugged!",
    "What's orange and sounds like a parrot? A carrot!",
    "I told my cat a joke about dogs, but he didn't find it a-mew-sing.",
    "Why don't programmers like nature? It has too many bugs!"
];

function generateJokeImage(joke) {
    // Simple URL encoding for the joke text
    const lines = [];
    const words = joke.split(' ');
    let currentLine = '';
    
    for (const word of words) {
        if ((currentLine + ' ' + word).length <= 35) {
            currentLine = currentLine ? currentLine + ' ' + word : word;
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    
    const formattedJoke = lines.join('+');
    return `https://placehold.co/600x400/4a5568/ffffff.png?text=${encodeURIComponent(formattedJoke)}`;
}

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get a random joke
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        
        // Generate joke image
        const jokeImageUrl = generateJokeImage(randomJoke);
        
        // Simple frame HTML response
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Random Joke Frame</title>
    
    <!-- Required Farcaster Frame tags -->
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${jokeImageUrl}" />
    <meta property="fc:frame:button:1" content="Get Another Joke" />
    <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/joke" />
    
    <!-- Open Graph fallback -->
    <meta property="og:title" content="Random Joke Frame" />
    <meta property="og:description" content="${randomJoke}" />
    <meta property="og:image" content="${jokeImageUrl}" />
</head>
<body>
    <h1>Random Joke Frame</h1>
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