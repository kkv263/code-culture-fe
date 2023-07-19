import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "tertiary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "xsmall:text-base text-sm uppercase flex items-center justify-center xsmall:min-h-[50px] min-h-[36px] px-5 py-[10px] border transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-black border-black hover:bg-white hover:text-black disabled:hover:bg-black":
            variant === "primary",
          "text-black bg-transparent border-black hover:bg-gray-200":
            variant === "secondary",
          "text-white bg-rose-500 hover:bg-rose-700":
            variant === "tertiary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
