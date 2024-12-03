import Image from 'next/image'

export default function Profile() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="border-t border-gray-700 pt-6">
        <h1 className="text-2xl font-bold mb-4">John Doe</h1>
        <p className="text-gray-300">
          I'm a passionate web developer with expertise in React and Tailwind CSS. I love creating beautiful and functional websites that provide great user experiences.
        </p>
      </div>
    </div>
  )
}

