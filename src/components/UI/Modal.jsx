import { Box, IconButton, Modal as MuiModal, styled } from "@mui/material";
import { CloseIcon } from "../../assets/icons";

const Modal = ({ children, onClose, open, ...rest }) => (
  <StyledModal open={open} onClose={onClose} {...rest}>
    <Box className="content">
      <IconButton onClick={onClose} className="close-icon">
        <CloseIcon />
      </IconButton>

      {children}
    </Box>
  </StyledModal>
);

export default Modal;

const StyledModal = styled(MuiModal)(() => ({
  "& > .content": {
    borderRadius: "2%",
    background: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "1.25rem 1.25rem",
    transform: "translate(-50%, -50%)",
    width: "fit-content",

    "& > .close-icon": {
      position: "absolute",
      top: "1rem",
      right: "1rem",

      "& > path": {
        fill: "gray",
      },
    },
  },
}));
