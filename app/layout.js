import './globals.css'

export const metadata = {
  title: 'Random Joke Frame',
  description: 'A Farcaster frame that displays random jokes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}