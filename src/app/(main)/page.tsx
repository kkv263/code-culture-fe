import Hero from "@modules/home/components/hero"
import ProductShowcase from "@modules/home/components/product-showcase"
import Promo from "@modules/home/components/promo"
import FeaturedProducts from "@modules/home/components/featured-products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Promo/>
      <FeaturedProducts />
    </>
  )
}

export default Home
