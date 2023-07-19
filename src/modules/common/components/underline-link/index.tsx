import Link from "next/link"

type UnderlineLinkProps = {
  href: string,
  extraClass?:string,
  bgColor?: string,
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children, extraClass, bgColor="bg-black" }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className={`${extraClass} ${bgColor} flex items-center px-4 text-lg border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:px-8 rounded-tr-md rounded-bl-md`}
      >
        <>
          <span className="text-white">{children}</span>
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
