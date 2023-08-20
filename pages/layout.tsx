// import { Metadata } from 'next'
// import { Cormorant } from 'next/font/google'
import Header from '@/components/header'

// const inter = Cormorant({ subsets: ['cyrillic', 'latin'] })

// export const metadata: Metadata = {
//   title: 'Thats What She Baked',
//   description: 'Цей кекс точно буде смачним та красивим!',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* You can include footer or other layout elements here */}
    </>
  )
}
