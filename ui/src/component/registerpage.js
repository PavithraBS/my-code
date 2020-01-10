import React, { Fragment, useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Registermenubar from './registermenubar';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { client } from './actionindex';
import Select from '@material-ui/core/Select';
import { TimePicker, DateTimePicker, KeyboardDatePicker } from "@material-ui/pickers";



import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   root: {
//     overflowY:'scroll',
//     height:'500px',
// '& > *': {
//   margin: theme.spacing(1),
//   width: 200,


//     },
//   },
// }));

class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      badgeNumber: '',
      address: '',
      personToMeet: '',
      reasonToMeet: '',
      laptop: '',
      laptopNumber: '',
      others: '',
      date: '',
      laptopDisabled: true,
      date: new Date()

      // For showing leave balance
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);



  }

  //const classes = useStyles();  




  handleSave() {
    let visitor = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      badgeNumber: this.state.badgeNumber,
      address: this.state.address,
      personToMeet: this.state.personToMeet,
      reasonToMeet: this.state.reasonToMeet,
      laptop: this.state.laptop,
      laptopNumber: this.state.laptopNumber,
      laptopdisable: true,
      others: this.state.others,
      date: this.state.date

    }

    client.post('/menu/saveVisitorDetails', visitor)
    alert("Successfully Registered")
      .then((response) => {


        // this.props.getProjectDetail(this.state.empSrlId);
        //  ModalManager.open(<ErrorModal headerText="Success" message="Record(s) Successfully Updated" />);
        this.setState({
          isClickedOnDelete: false,
          redirect: false
        });
      }).catch(error => {

        // ModalManager.open(<ErrorModal />);
      });


  }

  handleChange(event) {
    if (event.target.name === 'laptop') {
      if (event.target.value === 'Yes') {
        this.setState({ laptopDisabled: false })
      }
      else if (event.target.value === 'No') {
        this.setState({ laptopDisabled: true })

      }
    }

    console.log(event)
    if (!event.hasOwnProperty('target')) {
      if (!event.hasOwnProperty('date')) {
        this.setState({ date: event });
      }
      else {
        this.setState({ time: event });
      }

    }
    else {
      console.log("++++", event.target.value);
      this.setState({ [event.target.name]: event.target.value });
    }

  }


  render() {


    return (
      <>
        <Registermenubar></Registermenubar>
        <form style={{ overflowY: 'scroll', height: '500px' }} noValidate autoComplete="off">
          <TextField id="standard-basic" label=" Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} /><br></br>

          <TextField id="standard-basic" label="PhoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} /><br></br>
          <TextField id="standard-basic" label="Badge Id Number" name="badgeNumber" value={this.state.badgeNumber} onChange={this.handleChange} /><br></br>
          <br></br>
          <TextareaAutosize name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} ></TextareaAutosize><br></br>
          <TextField id="standard-basic" label="Person to Meet" name="personToMeet" value={this.state.personToMeet} onChange={this.handleChange} /><br></br>
          <TextField id="standard-basic" label="Reason to Meet" name="reasonToMeet" value={this.state.reasonToMeet} onChange={this.handleChange} /><br></br>
          <br></br>
          {" "}
          <Fragment>
            <InputLabel>Laptop</InputLabel>
            <Select id="laptop" name="laptop" value={this.state.laptop} label="laptop" onChange={this.handleChange} >
              <MenuItem value="">  <em>Select</em> </MenuItem>
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
            </Select>
          </Fragment>  <br></br>
          <br></br>
          {" "}
          <TextField id="laptopNumber" placeholder="If Yes,EnterLaptopNumber" name="laptopNumber" disabled={this.state.laptopDisabled} value={this.state.laptopNumber} onChange={this.handleChange} />    <br></br>
          <br></br>
          {" "}
          <TextareaAutosize name="others" placeholder="Other Devices," value={this.state.others} onChange={this.handleChange} ></TextareaAutosize><br></br>
          {" "}
          <br></br>
          <Fragment> <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Select Date"
            name="date"
            format="MM/dd/yyyy"
            timeMode="12"
            value={this.state.date}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => this.handleChange(date)}
          /></Fragment><br></br>
          <br></br>
          <button onClick={this.handleSave} >Save</button>
        </form>

      </>
    );
  }
}

export default RegisterPage;