import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    horizontal: "left"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} >
          <MenuItem value="">
            <em>Laptop</em>
          </MenuItem>
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={20}>No</MenuItem>
     
        </Select>
       
      </FormControl>
      
    </div>
  );
}