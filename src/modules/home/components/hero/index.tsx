import UnderlineLink from "@modules/common/components/underline-link"
import AnimatedTrack from "@modules/layout/components/animated-track"
import AnimatedCircleHero from '@modules/layout/components/hero-circle-animation';
import Image from "next/image"

const Hero = () => {
  return (
    <>
    <section className="h-[90vh] w-full relative overflow-hidden from-gray-50 to-white bg-gradient-to-r">
      <div className="absolute inset-0 z-1 flex flex-col items-center text-center small:text-left justify-end small:items-start small:p-32">
        <h1 className="font-mono text-7xl mb-4">CØĐE: CULTURE</h1>
        <p className="text-lg max-w-[32rem] mb-6">
          When you combine unique original art with sophiscated anime --
          you get something you&apos;ve never seen before
        </p>
        <UnderlineLink href="/store">Explore products &gt;&gt; </UnderlineLink>
      </div>
      <div className="absolute top-0 right-32 w-96 h-full">
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

    </section>
    <AnimatedTrack />
    </>
  )
}

export default Hero
