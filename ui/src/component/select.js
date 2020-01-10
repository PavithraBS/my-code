import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    horizontal: "left",
  
  },
  select:{
marginLeft:116,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginleft:116,
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []); 

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.select}>
      
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>GuruPurandar</MenuItem>
          <MenuItem value={20}>Vishwanath</MenuItem>
          <MenuItem value={30}>Harish</MenuItem>
          <MenuItem value={40}>Bibin</MenuItem>
          <MenuItem value={50}>Prashanth</MenuItem>
        </Select>
       
      </FormControl>
      
    </div>
  );
}