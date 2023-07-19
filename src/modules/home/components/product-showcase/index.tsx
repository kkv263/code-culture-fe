'use client'

import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { useState } from "react"

const ProductShowcase = () => {

  const products = [
    {
      name: 'c.DAWN [x]',
      price: '$24.99',
      img: '/sidemodel.png'
    },
    {
      name: 'c.DUSK [x]',
      price: '$23.99',
      img: '/malestreetwear.png'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="medium:py-12 py-8 relative after:absolute after:inset-0 after:w-full after:h-full after:bg-subtle-pattern after:opacity-30 after:bg-fill ">
      <div className="content-container medium:py-12 py-4 grid medium:grid-cols-2 grid-cols-1 z-10 relative">
        <div className="flex flex-col items-center">
          <div className="medium:hidden flex flex-col items-center ">
            <h2 className="max-w-xl xsmall:text-5xl text-4xl text-center font-mono pb-8">ORIGINAL ANIME ART, ANIME GRUNGE STREETWEAR</h2>
            <UnderlineLink extraClass="mb-8" href="/store">Shop now &gt;&gt;</UnderlineLink>
          </div>

          <div className="w-96 medium:h-[40rem] h-[32rem] relative border border-black mb-4 bg-white">
            <Image
              src={products[activeIndex].img}
              loading="lazy"
              quality={90}
              alt="female model with white shirt and pants"
              draggable="false"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col pb-12 text-center">
            <p className="font-mono text-2xl">{products[activeIndex].name}</p>
            <p>{products[activeIndex].price}</p>
          </div>
          <div className="flex justify-center items-center w-96 h-2">
            {products.map((x, index) => (
                <div 
                  onClick={() => setActiveIndex(index)}
                  key={index} 
                  className={`cursor-pointer h-2 ${index !== products.length - 1 ? 'mr-2' : ''} border border-black ${activeIndex === index ? 'bg-rose-500' : '' } w-full hover:bg-rose-600 transition-colors	`}>
                </div>
            ))}

          </div>
        </div>
        <div className="medium:flex flex-col items-center hidden">
          <h2 className="text-5xl text-center font-mono pb-8">ORIGINAL ANIME ART, ANIME GRUNGE STREETWEAR</h2>
            <div className="w-96 h-96 relative border border-black mb-4">
              <Image
                src="/streetwearbag.png"
                loading="lazy"
                quality={90}
                alt="white bag with black handles"
                draggable="false"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-col text-center pb-12">
              <p className="font-mono text-2xl">a.PAN [x]</p>
              <p>$14.99</p>
            </div>
          <UnderlineLink href="/store">Shop now &gt;&gt;</UnderlineLink>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
