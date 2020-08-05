import React, {useState} from 'react';
import { 
  Modal,
  Fade,
  Backdrop,
  Box,
  Button,
  Typography
 } from '@material-ui/core';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
export default function Win({open, data, handlerNewGame}) {
  const classes = useStyles();
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true)
  }

  const {name, score, streak, empate} = data;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
           <Box className={classes.paper}>
            <ThumbUpIcon color='secondary' className={ classes.icon}/> 
            <Box>
              <Button> {score}</Button>
              <Button> User: {name}</Button>
              <Button> Streak: {streak}</Button>
            </Box>
            <Typography className={classes.center}>
              {empate ? "Tie":  "WIN"}
            </Typography>
            <Box>
              <Button color='primary'onClick={handlerNewGame}>New Game</Button>
            </Box>

           </Box>
        </Fade>
      </Modal>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:400,
    textAlign:'center'
  },
  icon:{
    fontSize:200
  },
  center:{
    textAlign: 'center'
  }
  
}));

