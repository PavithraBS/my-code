
import React, { Component } from 'react';
import Table from './table.js';
import { connect } from 'react-redux';
import { client } from './actionindex';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { visitorHistoryDetails } from './action';
import Switch from '@material-ui/core/Switch';
import { KeyboardDatePicker } from "@material-ui/pickers";

class History extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleSave = this.handleSave.bind(this);
 }

  handleStartChange = (date )=> {
  
    this.setState({
      startDate: date
     
    });
  }
  handleEndChange = (date )=> {
  
    this.setState({
    endDate: date
    });
  
  }
  
  handleSave() {

    let date = {
     
      startDate: this.state.startDate,
      endDate: this.state.endDate

    }
    this.props.visitorHistoryDetails(this.state.startDate,this.state.endDate);
    console.log('65656', date);

    // client.post('/menu/getDateHistoryDetails', date)

    //   .then((response) => {


    //     // this.props.getProjectDetail(this.state.empSrlId);
    //     //  ModalManager.open(<ErrorModal headerText="Success" message="Record(s) Successfully Updated" />);
    //     this.setState({
    //       isClickedOnDelete: false,
    //       redirect: false
    //     });
    //   }).catch(error => {

    //     // ModalManager.open(<ErrorModal />);
    //   });


  }

  componentDidMount() {
    this.props.visitorHistoryDetails("","");
  }

  render() {
    
    return (
      <div className="App" >
            <div style={{ overflowY: 'scroll', height: '500px' }}>
              <div><p style={{ color: '#00078b' , fontSize: '20px'}}><b>VISITOR HISTORY DETAILS</b>  </p></div>
            <KeyboardDatePicker
            label="FROM"
        placeholder="2018/10/10"
        value={this.state.startDate}
        onChange={(date) =>this. handleStartChange(date)}
        format="yyyy/MM/dd"
      />
      {"    "}
      
          <KeyboardDatePicker
            label="TO"
        placeholder="2018/10/10"
        value={this.state.endDate}
        onChange={(date) =>this. handleEndChange(date)}
        format="yyyy/MM/dd"
      /><br></br>
      
      <br></br><button  onClick={this.handleSave}>Search</button><br></br>
      {"    "}
      {console.log("-----------------",this.props)}
        {this.props.visitorHistoryDetailsData.length > 0 && this.props.loading?
         
          <table className="table" >
             <br></br>
            <div  noValidate autoComplete="off">
              <thead  >
                
                <tr>
                  <th>fullName</th>
                  <th>Badge Number</th>
                  <th>Phone Number</th>
                  <th>laptop</th>
                  <th>laptop Number</th>
                  <th>Person To Meet</th>
                  <th>Reason To Meet</th>
                  <th>Entry InTime</th>
                  <th>Entry InDate (yy/mm/dd)</th>
                  <th>Entry OutTime</th>
                  <th>Entry OutDate (yy/mm/dd)</th>
                </tr>
              </thead>

              <tbody>
                {this.props.visitorHistoryDetailsData[0].data.map((temp) => {
                  console.log("dfgfh", this.props.visitorHistoryDetailsData)
                  return (
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
                      <th>{temp.logoutTime}</th>
                      <th>{temp.logoutDatehalf}</th>
                    </tr>
                  )
                })}
              </tbody>
            </div>
          </table>
          : ''
        }
</div>        

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("maptostatetoprops", state)
  return {
    visitorHistoryDetailsData: state.visitorHistoryDetails,
     loading:state.loading

  };

}

export default connect(mapStateToProps, { visitorHistoryDetails })(History);
