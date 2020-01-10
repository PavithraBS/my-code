
import React, { Component } from 'react';
import Table from './table.js';
import { connect } from 'react-redux';
import { client } from './actionindex';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getVisitorDetails } from './action';
import Switch from '@material-ui/core/Switch';

class TableLink extends Component {

  constructor(props) {

    super(props);

    var today = new Date(),
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
date=today;

    this.state = {
      visitorDetails: [],
      date: date,
      successMsg:''
      
    };

    this.handleLogout = this.handleLogout.bind(this);

  }
  componentDidMount() {
    this.props.getVisitorDetails();


  }
  

  handleLogout(id) {
   
  
 
    {console.log(this.state.date)}


      let logout = {
     // phoneNumber:visitorDetails.phoneNumber,
        logoutDate:this.state.date,
        id:id
      
      }
      alert(this.state.successMsg)
  
      console.log('65656', logout);
  
      client.post('/menu/logoutVisitorDetails', logout)
  
        .then((response) => {
          this.props.getVisitorDetails();
  
          // this.props.getProjectDetail(this.state.empSrlId);
          //  ModalManager.open(<ErrorModal headerText="Success" message="Record(s) Successfully Updated" />);
          this.setState({
            successMsg : 'Record Added Successfully',
            isClickedOnDelete: false,
            redeirect: false
          },()=>{window.location.reload();});
        }).catch(error => {
  
          // ModalManager.open(<ErrorModal />);
        });
  
  
    }
  


  render() {

    return (
      <div className="App" >

        {this.props.visitorDetails.length > 0 ?

          <table  className="table" ><div style={{ overflowY: 'scroll', height: '500px' }} noValidate autoComplete="off">
              <thead style={{color:'#00078b'}} >
                <thead  style={{color:'red'}}> <tr>
                Visitor Logout Form
              </tr></thead>
               
              
              <tr>

                <th>fullName</th>
                <th>Badge Number</th>
                <th>Phone Number</th>
                <th>laptop</th>
                <th>Laptop Number</th>
                <th>Person To Meet</th>
                <th>Reason To Meet</th>
                <th>Entry In</th>
                <th>Entry date (yy/mm/dd)</th>
     
              </tr>
              
            </thead>
           
            <tbody  >

           
              {this.props.visitorDetails[0].data.map((temp) => {

              return(
          
              <tr >
              <th>{temp.fullName}</th>
              <th>{temp.badgeNumber}</th>
              <th>{temp.phoneNumber}</th>
              <th>{temp.laptop}</th>
              <th>{temp.laptopNumber}</th>
              <th>{temp.personToMeet}</th>
              <th>{temp.reasonToMeet}</th>
              <th>{temp.loginTime}</th>
              <th>{temp.loginDate}</th>
              <th>{temp.logout}</th>
              <th>{<Switch
        onChange={()=>this.handleLogout(temp.id)}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}/>}</th>
              </tr>)})}         
            </tbody>
            </div>
          </table>
          : ''
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log("maptostatetoprops", state)
  return {
    visitorDetails: state.visitorDetails,


  };

}

export default connect(mapStateToProps, { getVisitorDetails })(TableLink);