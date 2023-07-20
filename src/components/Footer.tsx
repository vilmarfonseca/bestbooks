import React from "react"

const Footer: React.FC = () => {
  return (
    <div
      className={
        "max-w-[1800px] w-full h-20 flex items-center justify-center border-t border-secondary border-opacity-25"
      }
    >
      {`© BestBooks ${new Date().getFullYear()}`}
    </div>
  )
}
export default Footer
