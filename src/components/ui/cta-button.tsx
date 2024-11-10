import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const ctaButtonClasses = cn(
  "min-w-[120px] h-[48px] px-[20px] py-4 rounded-md text-base font-medium transition-all duration-200",
  "bg-white/10 text-white border border-white ",
  "hover:bg-white hover:text-blue-500 hover:border-transparent",
  "active:bg-blue-500 active:text-white active:border-transparent"
)

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "h-[48px] px-[20px] py-4 rounded-md text-base font-medium transition-all duration-200",
          ctaButtonClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

CTAButton.displayName = "CTAButton"

export { CTAButton } 