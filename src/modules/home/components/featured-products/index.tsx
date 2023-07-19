"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <section className="py-12">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl font-mono mb-6">LATEST COLLECTION</h2>
          <p>Shop for your favorite style</p>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </section>
  )
}

export default FeaturedProducts
