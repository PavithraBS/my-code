class Application extends React.Component {
    getInitialState(){
      var date = new Date();
      return{
        date: "date"
      }
    }
    updateTimes(){
      var date = new Date();
      this.setState({date: date})
    }
    render() {
      alert(this.state.date);
      var date = this.state.date;
      return <div>
        <h1>Your local time is {date.toLocaleString()} </h1> <br/>
        <h1>Your local time is {date.getTimezoneOffset()} minues offset from GMT </h1> <br/>
        <h1>Your local time is {date.toGMTString()} </h1> <br/>
        <button type="submit" onClick={this.updateTimes}> Refresh</button>
      </div>
      
    }
  }
  
  React.render(<Application />, document.getElementById('app'));