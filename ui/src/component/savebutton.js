import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Searchmenu from './searchmenu';
import Links from './links';
import Select from './select';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <>

      
    <div className={classes.root}>
      
      <Button variant="contained" color="primary" href="#contained-buttons">
        Save
      </Button>
     
    </div>
    </>
  );
}