import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutSection = (props: Props) => {
  return (
<section className='w-screen h-screen bg-gray-100 gap-5 grid grid-cols-2 grid-rows-1 overflow-hidden'>
    <div className='mt-24 ml-24'>
      <Image
        className=''
        src={'/aboutImage.webp'}
        alt='About Image'
        objectFit='contain'
        width={600}
        height={400}
      />

      <Image
        className='-translate-y-64 translate-x-[110%]'
        src={'/aboutImage2.webp'}
        alt='About Image'
        objectFit='contain'
        height={100}
        width={300}
      />
    </div>
    <div className='text-[#141414] mt-24 p-12 pl-5'>
        <h1 className='text-7xl font-light mb-5'>About</h1>
        <span className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem? orem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem?
        </span>
        <br /><br />
        <span className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem? orem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint nemo nobis atque animi iste et non impedit temporibus aperiam! Modi dignissimos voluptate ullam necessitatibus possimus quam in magnam voluptatem?
        </span>
    </div>
</section>  )
}

export default AboutSection