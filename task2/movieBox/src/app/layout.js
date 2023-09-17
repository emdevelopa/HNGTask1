import './globals.css'

const fontFamily = 'DM Sans, sans-serif';

export const metadata = {
  title: 'MovieBox',
  description: 'Welcome to your best movie discovery app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body style={{fontFamily}}>{children}</body>
    </html>
  )
}
