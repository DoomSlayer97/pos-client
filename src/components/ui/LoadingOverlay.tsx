import { Backdrop, CircularProgress } from "@mui/material"

interface ILoadingOverlayProps {
  show: boolean;
}

export const LoadingOverlay = ({ show }: ILoadingOverlayProps) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 99999 }}
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}