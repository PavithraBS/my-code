import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RegisterPage  from './registerpage';
import CardMedia from '@material-ui/core/CardMedia';
import TableLink from './tableLink';


import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[7],
    padding: theme.spacing(2, 4, 3),
  },
  
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
      <>
    <div>
      <Button type="button" onClick={handleOpen}>
        Visitor Logout
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <TableLink  ></TableLink>
          
          </div>
        </Fade>
      </Modal>
    </div>
    </>
  );
}