import React, { Component } from 'react';
let nameCount = 0;
let emailCount = 0;
let phoneCount = 0;

class InfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      salary: "",
      progress: 0,
      form: true
    }

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleProgressBar = this.handleProgressBar.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    });
    phoneCount === 0 && this.handleProgressBar();
    phoneCount++;
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
    nameCount === 0 && this.handleProgressBar();
    // if(this.state.name==='' && nameCount!==0){
    //   this.setState({progress:this.state.progress-25})
    //   nameCount=0;
    // }
    nameCount++;
    // console.log(nameCount)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })

    emailCount === 0 && this.handleProgressBar();
    emailCount++;
  }

  handleRadioChange(event) {
    this.setState({
      salary: event.target.value
    })
    !this.state.salary && this.handleProgressBar();
  }

  handleProgressBar() {
    // console.log('working' +this.state.progress)
    this.setState({
      progress: this.state.progress + 25
    })

  }

  handleSubmit(event) {
    this.setState({
      form: false
    })
    event.preventDefault();
  }

  handleHome() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      salary: "",
      progress: 0,
      form: true
    })
  }

  render() {
    if (this.state.form) {
      return (
        <div className="inputForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Full Name <br />
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange} />
            </label>
            <br />
            <label>
              Email <br />
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange} />
            </label>
            <br />
            <label>
              Phone Number <br />
              <input
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handlePhoneChange} />
            </label>
            <br />
            <label>
              Salary
          <br />
              <label>
                <input
                  name="salary"
                  type="radio"
                  value="0-1.000"

                  onChange={this.handleRadioChange} />
                0-1.000
            </label>
              <label>
                <input
                  name="salary"
                  type="radio"
                  value='1.000-2.000'

                  onChange={this.handleRadioChange} />
                1.000-2.000
            </label>
              <label>
                <input
                  name="salary"
                  type="radio"
                  value='2.000-3.000'

                  onChange={this.handleRadioChange} />
                2.000-3.000
            </label>
              <label>
                <input
                  name="salary"
                  type="radio"
                  value='3.000-4.000'

                  onChange={this.handleRadioChange} />
                3.000-4.000
            </label>
              <label>
                <input
                  name="salary"
                  type="radio"
                  value='Mehr als 4.000'

                  onChange={this.handleRadioChange} />
                Mehr als 4.000
            </label>
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <div className="progress-bar" >
            <div className="progress-bar-fill" style={{ width: `${this.state.progress}%` }}>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="success">
          Success!

          <br /> We Have Received your Data and will get back to you soon!<br />
          Please review your information and send us an email at <code>HomeApp@home.ht</code> if there are any problems!
        <br />
          <br />
          Here is your info!
        <br />
          Name: {this.state.name}
          <br />
          Email: {this.state.email}
          <br />
          Phone: {this.state.phone}
          <br />
          Salary: {this.state.salary}
          <br />
          <br />
          <button onClick={this.handleHome}>Return Home</button>

        </div>)
    }
  }
}

export default InfoForm;