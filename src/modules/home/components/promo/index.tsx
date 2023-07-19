import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Promo = () => {
  return (
    <section className="relative h-[40rem] w-full after:absolute after:w-full after:h-full after:inset-0 after:from-black after:from-10% medium:after:bg-gradient-to-l after:bg-gradient-to-t">
      <Image
        className="object-[left_calc(50%)_top_calc(20%)]"
        src="/modelbg2.png"
        loading="lazy"
        quality={90}
        alt="girl sitting on streets with white hoodie"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="content-container relative z-10 h-full flex justify-end ">
        <div className=" flex-col flex medium:justify-center justify-end items-center h-full medium:w-1/2 px-8 py-16  w-full">
          <h2 className="text-white text-center font-mono xsmall:text-6xl text-4xl pb-8">NEW Collection <div className="text-rose-500">łĐENTITY</div></h2>
          <UnderlineLink bgColor="bg-rose-500" href="/store">Shop now &gt;&gt;</UnderlineLink>
        </div>
      </div>
    </section>
  )
}

export default Promo
