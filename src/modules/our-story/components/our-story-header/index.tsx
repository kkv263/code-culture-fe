import Image from 'next/image';

const OurStoryHeader = () => {

  return (
    <section className="small:mt-40 xsmall:mt-32 mt-20 w-full relative h-[80vh] after:absolute after:w-full after:h-full after:inset-0 after:bg-black after:opacity-50">
      <div className="content-container flex justify-center h-full z-10 relative items-start">
        <h1 className='small:-mt-40 xsmall:-mt-32 -mt-20 small:text-[160px] xsmall:text-[120px] text-[76px] font-mono text-center leading-none'>What is <br/> <span className='text-white'>our </span><span className='text-rose-500 underline'>story?</span></h1>
      </div>
      <Image
        src="/cta_two.jpg"
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
    </section>
  )
}

export default OurStoryHeader