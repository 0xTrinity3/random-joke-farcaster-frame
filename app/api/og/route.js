import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const setup = searchParams.get('setup') || 'Why did the chicken cross the road?';
  const punchline = searchParams.get('punchline') || 'To get to the other side!';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: 'Arial',
          color: '#fff',
          textAlign: 'center',
          padding: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          fontSize: '48px'
        }}>
          🎭
        </div>
        <h1 style={{ 
          fontSize: '36px', 
          marginBottom: '30px',
          lineHeight: '1.2',
          maxWidth: '90%'
        }}>
          {setup}
        </h1>
        <p style={{ 
          fontSize: '28px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          maxWidth: '90%'
        }}>
          {punchline}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630, // Matches 1.91:1 aspect ratio (1200/630 ≈ 1.91)
    }
  );
}