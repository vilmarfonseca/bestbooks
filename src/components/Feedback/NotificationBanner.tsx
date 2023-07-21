import { NotificationBannerProps } from "@/types/components/notificationBanner.types"
import { IconButton, Snackbar } from "@mui/material"
import React from "react"
import { MdClose } from "react-icons/md"

const NotificationBanner: React.FC<NotificationBannerProps> = ({
  open,
  handleClose,
  autoHideDuration,
  message,
}) => {
  const close = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    handleClose(false)
  }

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
        <MdClose className="h-5 w-5" />
      </IconButton>
    </>
  )

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={autoHideDuration}
      message={message}
      onClose={close}
      action={action}
    />
  )
}
export default NotificationBanner
