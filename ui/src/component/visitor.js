// import React, { Component } from "react";
// import Timestamp from 'react-timestamp';
// import { fontSize, textAlign } from "@material-ui/system";
// import './style.css';

// class visitor extends Component {
// Timestamp
//     constructor() {
//         super();
//         this.state = {
//             value: ''
//         }
//     }
//     render() {
//         return (
//             <div className="body">
//                 <div class="head" style={{ textDecorationLine: 'underline', textAlign: "center" }}>
//                     <h1>Estuate Visitors Form</h1>
//                 </div>
//                 <div className="textbox">
//                 <label  >
//                         First Name:
//            <input type="text" value={this.state.value} />
//                     </label></div>
//                 <br></br>
//                 <div className="textbox">
//                     <label  >
//                         Last Name:
//             <input type="text" value={this.state.value}  />
//                     </label></div>
//                 <br>
//                 </br>
//                 <div className="textbox">
//                 <label >
//                     Phone Number:
//             <input type="text" value={this.state.value} />
//                 </label>
//                 </div><br>
//                 </br>
//                 <div className="textbox">
//                 <label >
//                     Laptop:
//             <select>
//                         <option selected value="select">select</option>
//                         <option value="yes">yes</option>
//                         <option value="no">no</option>
//                     </select>
//                 </label> </div>
//                 <br></br>
//                 <div className="textbox">
//                 <label  >
//                     Address:
//           <textarea value={this.state.value} />
//                 </label>
//                 </div><br></br>
//                 <div className="textbox">
//                 <label  >
//                     Person to meet:
//             <input type="text" value={this.state.value} />
//                 </label>
//                 </div>
//                 <br></br>
//                 <div className="textbox">
//                 <label  >
//                     Purpose to meet:
//             <input type="text" value={this.state.value} />
//                 </label>
//                 </div><br></br>
//                 <>
//                 <Timestamp relative date={Date} /> 
// <Timestamp relative date={Date} /> 
// <Timestamp relative date={Date} relativeTo={Date} /> 
// <Timestamp relative date={Date} relativeTo={Date} /> 
// <Timestamp relative date={Date} autoUpdate />        
//  </>    
//  </div>
            
//         )
//     }
// }

// export default visitor;