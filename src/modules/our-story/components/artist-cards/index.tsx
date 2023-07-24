import Image from 'next/image';
const ArtistCards = () => {

  return (
    <>
      <section className="w-full py-16">
        <div className="content-container">
          <h2 className='text-center text-5xl font-mono pb-12'>Meet the Team</h2>
          <ul className='grid small:grid-cols-3 xsmall:grid-cols-2 grids-col-1'>
            <li className='border border-black flex p-4'>
              <div className='w-full flex flex-col items-center'>
                <div className='w-24 h-24 mb-4 relative'>
                <Image
                  src="/artist_k4v.jpg"
                  loading="lazy"
                  quality={100}
                  alt="k4vLevi artist profile"
                  draggable="false"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
                </div>
                <h3 className='font-mono text-xl pb-4'>Kevin (k4vlevi)</h3>
                <p className='text-sm pb-8 text-center'>Founder and lead developer of Code Culture. He&apos;s admiring different pieces artwork and culture. He always wants to finds way to share them with the world. Whenever he&apos;s not coding, he loves to draw, play videogames, and weightlift.</p>
                <ul>
                  <li className='hover:underline'><a href="https://www.instagram.com/k4vlevi/">Instagram: k4vlevi</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='pb-16'>
        <div className="content-container">
          <div className='small:text-2xl text-center'>Have an idea? Collaborate with us? Pick our brains? <br /> Give us a line at <a className="underline" href="mailto: codecultureapparel@gmail.com">codecultureapparel@gmail.com</a></div>
        </div>
      </section>
    </>

  )
}

export default ArtistCards