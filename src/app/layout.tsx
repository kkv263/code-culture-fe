import Providers from "@modules/providers"
import { IBM_Plex_Mono, Roboto_Mono, Russo_One } from 'next/font/google'
import "styles/globals.css"

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-ibm',
})
 
const russo_one = Russo_One({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-russo-one',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibm.variable} ${russo_one.variable}`}>
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
