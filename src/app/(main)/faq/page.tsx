import { Metadata } from "next"
import FaqHero from "@modules/faq/components/faq-hero"
import FaqBody from "@modules/faq/components/faq-body"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions",
}

const Faq = () => {
  return (
    <>
      <FaqHero />
      <FaqBody />
    </>
  )
}

export default Faq
