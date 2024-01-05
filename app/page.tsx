import Image from 'next/image'
import Home from '@/sections/Home/Home'
import About from '@/sections/About/About'
import ArtCategory from '@/sections/Art/ArtCategory'
import WhiteWave from '@/components/Wave/WhiteWave'
import BrownWave from '@/components/Wave/BrownWave'
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-5">
      <Home />
      <About />
      <WhiteWave />
      {/* <ArtCategory /> */}
      <BrownWave />
    </main>
  )
}
