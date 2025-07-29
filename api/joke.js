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
    "Why don't programmers like nature? It has too many bugs!",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
    "I'm addicted to brake fluid, but I can stop anytime.",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a sleeping bull? A bulldozer!",
    "I used to be addicted to soap, but I'm clean now.",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What do you call a cow with no legs? Ground beef!",
    "I'm reading a book on the history of glue. I just can't seem to put it down!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a factory that makes okay products? A satisfactory!",
    "I told a chemistry joke, but there was no reaction.",
    "Why don't ghosts go to parties? They have no body to dance with!",
    "What's the difference between a poorly dressed person on a bicycle and a well-dressed person on a tricycle? Attire!",
    "I'm so good at sleeping, I can do it with my eyes closed!",
    "Why don't melons get married? Because they cantaloupe!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "I used to run a dating service for chickens, but I was struggling to make hens meet.",
    "Why don't keyboards sleep? Because they have two shifts!",
    "What do you call a pig that does karate? A pork chop!",
    "I'm friends with 25 letters of the alphabet. I don't know Y.",
    "Why did the cookie go to the doctor? Because it felt crumbly!",
    "What do you call a group of disorganized cats? A cat-astrophe!",
    "I bought the world's worst thesaurus yesterday. Not only is it terrible, it's terrible.",
    "Why don't bachelors like Git? Because they're afraid to commit!",
    "What do you call a belt made of watches? A waist of time!",
    "I used to be a personal trainer, but I gave up that job. I just wasn't working out.",
    "Why don't ants get sick? Because they have little anty-bodies!",
    "What do you call a fake stone in Ireland? A sham rock!",
    "I told my dad a joke about a roof. He said it was over his head.",
    "Why don't eggs tell each other jokes? Because they might crack up!"
];

function generateJokeImage(joke) {
    // Create a properly formatted joke image using fakeimg.pl
    // Split joke into multiple lines if too long
    const maxLineLength = 35;
    const words = joke.split(' ');
    const lines = [];
    let currentLine = '';
    
    for (const word of words) {
        if ((currentLine + ' ' + word).length <= maxLineLength) {
            currentLine = currentLine ? currentLine + ' ' + word : word;
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    
    // Join lines with %0A (URL encoded newline)
    const formattedJoke = lines.join('%0A');
    
    return `https://fakeimg.pl/600x400/4a5568/ffffff?text=🎭%20${formattedJoke}%20🎭&font=arial&font_size=18`;
}

export default function handler(req, res) {
    // Only handle POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get a random joke
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        
        // Generate joke image
        const jokeImageUrl = generateJokeImage(randomJoke);
        
        // Return HTML with new frame
        const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Joke Frame</title>
    
    <!-- Farcaster Frame Metadata -->
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${jokeImageUrl}" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="Get Another Joke 😄" />
    <meta property="fc:frame:button:2" content="Share Joke 📱" />
    <meta property="fc:frame:button:2:action" content="link" />
    <meta property="fc:frame:button:2:target" content="https://random-joke-farcaster-frame.vercel.app/" />
    <meta property="fc:frame:post_url" content="https://random-joke-farcaster-frame.vercel.app/api/joke" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Random Joke Frame">
    <meta property="og:description" content="${randomJoke}">
    <meta property="og:image" content="${jokeImageUrl}">
    <meta property="og:url" content="https://random-joke-farcaster-frame.vercel.app/">
    <meta property="og:type" content="website">
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