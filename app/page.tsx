'use client'

import Profile from '@/components/Profile'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col lg:flex-row">
      <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
        <Profile />
      </div>
      <div className="lg:w-2/3">
        <Carousel />
      </div>
    </div>
  )
}

