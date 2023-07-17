'use client'

const AnimatedTrack = () => {
  return (
    <section className="py-2 bg-black w-full overflow-hidden">
    <div className=" text-white inline-flex items-center animate-rtl">
      {[...Array(10)].map((x, i) => 
      (<>
        <span className="whitespace-nowrap">ORIGINAL ART</span>
        <span className="px-16">◘</span>
        <span className="whitespace-nowrap">ANIME STYLE STREETWEAR</span>
        <span className="px-16">◘</span>
      </>
      ))}

      </div>
  </section>
  )
}

export default AnimatedTrack
