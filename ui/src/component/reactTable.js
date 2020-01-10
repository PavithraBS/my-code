// import React, { Component } from 'react';


// class Table extends Component {
//     renderTableData() {
//         return this.state.students.map((student, index) => {
//            const {   badgeId, name, phoneNumber } = student //destructuring
//            return (
//               <tr key={badgeId}>
            
//                  <td>{badgeId}</td>
//                  <td>{name}</td>
//                  <td>{phoneNumber}</td>
//                  <td> <button>Logout</button> </td>
//               </tr>
//            )
//         })
//      }
  
//      renderTableHeader() {
//         let header = Object.keys(this.state.students[0])
//         return header.map((key, index) => {
//            return <th key={index}></th>
//         })
//      }
   
//    constructor(props) {
//       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: [
//             {   badgeId:5404, name: 'Soundary', phoneNumber: 56245678, Logout:'' },
//             {  badgeId:5405,  name: 'Ramesh', phoneNumber: 567597876 , Logout:''},
//             {  badgeId:540445,  name: 'Ranjeetha', phoneNumber: 57685646,Logout:'' },
       
//          ]
//       }
//    }

//    render() {
//     return (
//        <div>
//           <h1 id='title'>Logout Form</h1>
//           <table id='Visitor'>
//              <tbody>
//                 <tr>{this.renderTableHeader()}</tr>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }
// }

// export default Table 