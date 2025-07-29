# Random Joke Frame - Farcaster Mini-App

A fun Farcaster mini-app that displays random funny jokes with every click!

## Features

- 🎭 50+ hilarious jokes
- 📱 Mobile-responsive design
- 🔄 No duplicate jokes until all are shown
- 📋 Share functionality with clipboard fallback
- ⌨️ Keyboard support (Space/Enter to get new joke)
- 🎨 Beautiful gradient design with animations

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run locally:
```bash
npm run dev
```

3. Open your browser to the local server URL (usually http://localhost:3000)

## Deployment

### Option 1: Vercel (Recommended)
1. Push this code to a GitHub repository
2. Connect your GitHub repo to Vercel
3. Deploy automatically
4. Update the frame metadata URLs in `index.html` with your Vercel URL

### Option 2: Any Static Host
1. Upload all files to your web hosting service
2. Update the URLs in the frame metadata
3. Ensure HTTPS is enabled

## Frame Integration

To use this as a Farcaster Frame:

1. Deploy the app to a public HTTPS URL
2. Update the frame metadata in `index.html`:
   - Replace `https://your-domain.com/` with your actual domain
   - Update the `imageUrl` with a custom preview image if desired
3. Share the URL in Farcaster - it will automatically render as a frame

## Customization

### Adding More Jokes
Edit the `jokes` array in `joke-data.js` to add your own jokes.

### Styling
Modify the CSS in `index.html` to change colors, fonts, and layout.

### Frame Metadata
Update the meta tags in `index.html` to customize:
- Frame title and description
- Preview image
- Button text

## File Structure

- `index.html` - Main HTML file with frame metadata
- `app.js` - JavaScript functionality
- `joke-data.js` - Collection of jokes
- `package.json` - Project configuration
- `README.md` - This file

## Frame Specification

This mini-app follows the Farcaster Frame specification with:
- Proper `fc:miniapp` metadata
- Open Graph tags for social sharing
- Mobile-responsive design
- Interactive button functionality

## Development

The app is built with vanilla HTML, CSS, and JavaScript for maximum compatibility and minimal dependencies.

## License

MIT License - feel free to modify and use for your own projects!