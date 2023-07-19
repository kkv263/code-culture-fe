"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8 text-white relative overflow-hidden">

      <div className="absolute -top-1  left-1/2 -translate-x-1/2 font-mono whitespace-nowrap"> 
        {[...Array(149)].map((x, i) => (<span key={i}>/</span>))}
      </div>
      <div className="flex flex-col gap-y-6 xsmall:flex-row xsmall:items-start items-center justify-between">
        <form action="" className="flex flex-col pr-8">
          {/* <Link href="/" className="text-xl-semi uppercase font-mono">
            CØĐE: CULTURE
          </Link> */}
          <label className="medium:text-4xl text-3xl mb-8">JOIN THE NEWSLETTER</label>
          <input className="placeholder:opacity-50 bg-transparent border-b py-2" placeholder="email@example.com" type="email" />
        </form>
        <div className="text-small-regular grid grid-cols-3 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base underline">COLLECTIONS</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  ◘ <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base underline">INFO</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ About Us
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ Our Artists
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base underline">CONTACT</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ Discord
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◘ Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">CØĐE: CULTURE © 2023</span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
