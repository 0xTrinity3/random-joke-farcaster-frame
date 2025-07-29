function wrapText(text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    for (const word of words) {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        if (testLine.length <= maxWidth) {
            currentLine = testLine;
        } else {
            if (currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                lines.push(word);
            }
        }
    }
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

export default function handler(req, res) {
    const { joke } = req.query;
    
    if (!joke) {
        return res.status(400).json({ error: 'Joke parameter required' });
    }
    
    // Wrap text to fit in the image
    const wrappedLines = wrapText(decodeURIComponent(joke), 40);
    
    // Calculate vertical positioning
    const lineHeight = 40;
    const totalHeight = wrappedLines.length * lineHeight;
    const startY = 200 - (totalHeight / 2);
    
    const svg = `
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#grad1)"/>
    <rect x="30" y="30" width="540" height="340" rx="20" fill="white" opacity="0.95"/>
    
    <!-- Joke Icon -->
    <text x="300" y="80" font-family="Arial, sans-serif" font-size="40" text-anchor="middle" fill="#4F46E5">🎭</text>
    
    <!-- Joke Text -->
    ${wrappedLines.map((line, index) => 
        `<text x="300" y="${startY + (index * lineHeight)}" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#333" font-weight="bold">${line}</text>`
    ).join('\n    ')}
    
    <!-- Decorative elements -->
    <circle cx="80" cy="80" r="8" fill="#667eea" opacity="0.3"/>
    <circle cx="520" cy="320" r="12" fill="#764ba2" opacity="0.3"/>
    <circle cx="520" cy="80" r="6" fill="#667eea" opacity="0.4"/>
    <circle cx="80" cy="320" r="10" fill="#764ba2" opacity="0.3"/>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.status(200).send(svg);
}