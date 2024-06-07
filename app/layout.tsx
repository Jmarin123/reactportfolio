import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'
import LoadingSwitch from './LoadingSwitch'
const inter = Karla({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Jason Osorio Marin',
  description: 'Jason Osorio Marin Portfolio',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} dark:bg-dark-background bg-light-background`}>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <LoadingSwitch>
          {children}
        </LoadingSwitch>
      </body>
    </html>
  )
}
