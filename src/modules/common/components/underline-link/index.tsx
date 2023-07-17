import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className="bg-black flex items-center px-2 text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-4 rounded-tr-md rounded-bl-md"
      >
        <>
          <span className="text-white">{children}</span>
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
