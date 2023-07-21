import { Button } from "@mui/material"
import clsx from "clsx"
import { CustomButtonProps } from "@/types/components/customButton.types"

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  type,
  variant,
  className,
  text,
}) => {
  return (
    <Button
      type={type as string}
      href={href as string}
      className={clsx(
        className,
        variant === "pill" && "rounded-full",
        "normal-case bg-cta text-white font-sans font-bold py-2 px-4 shadow-sm transition-all duration-200 hover:bg-white hover:text-cta",
      )}
    >
      {text}
    </Button>
  )
}
export default CustomButton
