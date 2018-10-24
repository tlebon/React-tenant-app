import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div>
        Success! We Have Received your Data and will get back to you soon!
        Please review your information and send us an email at <code>HomeApp@home.ht</code> if there are any problems!
        <br/>
        Name: {this.props.name}
        <br/>
        Email: {this.props.email}
        <br/>
        Phone: {this.props.phone}
        <br/>
        Salary: {this.props.salary}
      </div>
    );
  }
}

export default Success;