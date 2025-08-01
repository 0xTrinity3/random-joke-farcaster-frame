export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>🎭 Random Joke Frame</h1>
      <p>This is a Farcaster Frame that displays random jokes.</p>
      <p>Frame endpoint: <code>/api/frame</code></p>
      <a 
        href="/api/frame" 
        style={{ 
          color: 'white', 
          textDecoration: 'underline',
          fontSize: '18px',
          marginTop: '20px'
        }}
      >
        View Frame →
      </a>
    </div>
  );
}