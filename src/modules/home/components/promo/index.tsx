import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Promo = () => {
  return (
    <section className="relative h-[40rem] w-full">
      <Image
        className="object-left-top"
        src="/femalestreetwear.jpg"
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
      <div className="content-container relative z-10 h-full flex justify-end from-black from-20% medium:bg-gradient-to-l bg-gradient-to-t">
        <div className=" flex-col flex medium:justify-center justify-end items-center h-full medium:w-1/2 px-8 py-16  w-full">
          <h2 className="text-white text-center font-mono xsmall:text-6xl text-4xl pb-8">NEW Collection <div className="text-rose-500">łĐENTITY</div></h2>
          <UnderlineLink bgColor="bg-rose-500" href="/store">Shop now &gt;&gt;</UnderlineLink>
        </div>
      </div>
    </section>
  )
}

export default Promo
