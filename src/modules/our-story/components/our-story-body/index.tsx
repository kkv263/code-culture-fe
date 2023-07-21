import Image from 'next/image';

const OurStoryBody = () => {

  return (
    <section className='pb-12 overflow-hidden'>
      <h2 className='font-mono small:text-6xl text-4xl py-8 px-16 bg-black text-white text-center'>We want to be original, be ourselves, and like what we like.</h2>
      <div className="content-container">
        <div className='grid small:grid-cols-3 grid-cols-1 small:gap-16 pb-16'>
          <div className='py-8'>
            <h3 className='font-mono text-4xl pb-8'>Designs crafted by passionate artists</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tellus libero. Proin at tincidunt quam. Sed vitae libero ullamcorper, ultricies massa tincidunt, aliquet dolor. Sed finibus leo ante. Praesent felis lorem, facilisis vel laoreet quis, consectetur eget ex. Nunc euismod quis risus eu ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat scelerisque eleifend. Etiam semper euismod tristique. </p>
          </div>
          <div className='relative w-full col-span-2 h-[32rem] after:absolute after:w-full after:h-full after:-bottom-6 after:-left-6 after:bg-rose-500'>
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
          <div className='relative small:w-1/2 w-full h-[32rem] after:absolute after:w-full after:h-full after:-bottom-6 after:-right-6 after:bg-slate-800 -order-1'>
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
              <p className='pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tellus libero. Proin at tincidunt quam. Sed vitae libero ullamcorper, ultricies massa tincidunt, aliquet dolor. Sed finibus leo ante. Praesent felis lorem, facilisis vel laoreet quis, consectetur eget ex. Nunc euismod quis risus eu ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat scelerisque eleifend. Etiam semper euismod tristique. </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurStoryBody