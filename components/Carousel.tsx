'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const carouselItems = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="relative h-[400px] mb-6">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={nextSlide} className="flex items-center">
          Next Project
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

