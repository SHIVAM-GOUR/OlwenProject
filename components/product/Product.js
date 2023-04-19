import styles from "./Product.module.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef, Fragment, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (product) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className={styles.productBox} onClick={handleClickOpen}>
        <div className={styles.imageBox}>
          <img
            src={product.imagePath}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <p className={styles.productName}>{product.name}</p>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <b>{product.name}</b>
        </DialogTitle>
        <DialogContent>
            <img
              src={product.imagePath}
              alt={product.name}
              className={styles.dialogBoxImg}
            />
          <DialogContentText>{product.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Product;
