export const metadata = {
  title: 'Streaming Search Service',
  description: 'Created by Sanju',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
