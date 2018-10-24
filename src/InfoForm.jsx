import React, { Component } from 'react';

class InfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      salary: "",
      progress: 0

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value,

    });
  }

  handleRadioChange(event) {
    this.setState({
      salary: event.target.value
    })
  }
  
handleProgressBar(event){
  this.setState({
    progress: 20
  })
}
  handleSubmit(event) {

    // event.preventDefault();
  }

  render() {
    return (
      <div class="inputForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email <br />
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number <br />
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleInputChange} />
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

        <div>

        </div>
      </div>
    );
  }
}

export default InfoForm;