import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'
import MyApp from './switchForLoading'
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
        <MyApp>
          {children}
        </MyApp>
      </body>
    </html>
  )
}
