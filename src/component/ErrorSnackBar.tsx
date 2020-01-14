import * as React from "react"
import { Snackbar } from "@material-ui/core"

type Props = {
  open: boolean
  message: string
}

export const ErrorSnackBar: React.FC<Props> = React.memo(
  ({ open, message }: Props) => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message={message}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      />
    )
  }
)
