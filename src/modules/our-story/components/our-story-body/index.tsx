import Image from 'next/image';

const OurStoryBody = () => {

  return (
    <section className='pb-12 overflow-hidden'>
      <h2 className='font-mono small:text-6xl text-4xl py-8 px-16 bg-black text-white text-center'>We want to be original, be ourselves, and like what we like.</h2>
      <div className="content-container">
        <div className='grid small:grid-cols-3 grid-cols-1 small:gap-16 pb-16'>
          <div className='py-8'>
            <h3 className='font-mono text-4xl pb-8'>Artist owned, artist vision.</h3>
            <p>We started Code Culture as a platform for artists to be able to create thier vision for the world to see. We want art to be worn, to be shown off, be real and physical.  </p>
            <br/>
            <p>Let&apos;s make the world our canvas -- one master work of art at a time.</p>
          </div>
          <div className='relative w-full col-span-2 h-[28rem] after:absolute after:w-full after:h-full after:-bottom-6 after:-left-6 after:bg-rose-500'>
            <Image
              className='top z-10'
              src="/cta_four.jpg"
              loading="eager"
              priority={true}
              quality={100}
              alt=""
              draggable="false"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            </div>
        </div>
        <div className='flex small:flex-row flex-col-reverse'>
          <div className='relative small:w-1/2 w-full h-[28rem] after:absolute after:w-full after:h-full after:-bottom-6 after:-right-6 after:bg-slate-800 -order-1'>
            <Image
              className='object-top z-10'
              src="/cta_three.jpg"
              loading="eager"
              priority={true}
              quality={100}
              alt=""
              draggable="false"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            </div>
            <div className='pt-8 relative small:w-1/2 w-full small:ml-16 ml-0'>
              <h3 className='font-mono text-4xl pb-8'>Pushing limits, trying new things</h3>
              <p >Art is limitless, no bounds, and infinite potential. We&apos;re not afraid to try new things -- or even bring back dead trends. </p>
              <br/>
              <p className='pb-8'>Combine this with everyday streetwear fashion, another form of unlimited creativity and you&apos;ve got yourself a very wide net. You&apos;ve got unlimited options to choose from; so you can do you and like what you like.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurStoryBody