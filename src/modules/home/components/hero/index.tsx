import UnderlineLink from "@modules/common/components/underline-link"
import AnimatedTrack from "@modules/layout/components/animated-track"
import AnimatedCircleHero from '@modules/layout/components/hero-circle-animation';
import Image from "next/image"

const Hero = () => {
  return (
    <section className=" medium:from-gray-50 medium:to-white medium:bg-gradient-to-r">
      <div className="content-container h-[90vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 z-10 text-center medium:p-32 flex flex-col justify-end items-center h-full medium:text-left medium:items-start">
          <div className="px-0 flex flex-col items-center medium:pb-0 pb-8 medium:items-start medium:bg-none medium:opacity-100  from-white from-80% bg-gradient-to-t pt-8 opacity-95">
            <h1 className="font-mono xsmall:text-7xl text-5xl mb-4">CØĐE: CULTURE <div className="font-sans text-3xl text-rose-500">「コードカルチャー」</div></h1>
            <p className="xsmall:text-lg text-md max-w-[32rem] mb-6">
              When you combine unique original art with sophiscated anime --
              you get something you&apos;ve never seen before.
            </p>
            <UnderlineLink href="/store">Explore products &gt;&gt; </UnderlineLink>
          </div>

        </div>
        <div className="absolute top-0 w-96 h-full medium:translate-x-0 medium:right-32 right-1/2 translate-x-1/2 z-0">
          <div className="w-128 h-128 absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 border border-black rounded-full"></div>
          <AnimatedCircleHero />
          <Image
            src="/herostreetwear.png"
            loading="eager"
            priority={true}
            quality={100}
            alt="male model with white shirt, green cargo pants, and backpack over shoulder"
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

      </div>
      <AnimatedTrack />
    </section>
  )
}

export default Hero
