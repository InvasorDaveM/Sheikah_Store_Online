import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class customerCreation extends Component {

  constructor(props) {
    super(props);

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this)
    this.onChangeCustomerBirthdate = this.onChangeCustomerBirthdate.bind(this)
    this.onChangeCustomerUser = this.onChangeCustomerUser.bind(this)
    this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = { 
      name:"",
      email:"",
      birthdate:"",
      user:"",
      password:""
    };

  }

  onChangeCustomerName(e){
    this.setState({name: e.target.value});
  }
  onChangeCustomerEmail(e){
    this.setState({email: e.target.value});
  }
  onChangeCustomerBirthdate(e){
    this.setState({birthdate: e.target.value});
  }
  onChangeCustomerUser(e){
    this.setState({user: e.target.value});
  }
  onChangeCustomerPassword(e){
    this.setState({password: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();

    const customerObject = {
      name: this.state.name,
      email: this.state.email,
      birthdate: this.state.birthdate,
      user: this.state.user,
      password: this.state.password,
    }

    axios
    .post("http://localhost:4000/customers/create-customer", customerObject)
    .then((res) => console.log(res.data));
    this.setState({
      name:"",
      email:"",
      birthdate:"",
      user:"",
      password:""
    })
  }


  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Pedro" 
            value = {this.state.name} 
            onChange = {this.onChangeCustomerName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="pedro@example.com" 
            value = {this.state.email} 
            onChange = {this.onChangeCustomerEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="birthdate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control 
            type="date" 
            value = {this.state.birthdate} 
            onChange = {this.onChangeCustomerBirthdate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User</Form.Label>
            <Form.Control 
            value = {this.state.user} 
            onChange = {this.onChangeCustomerUser}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            value = {this.state.password} 
            onChange = {this.onChangeCustomerPassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirm_password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="danger" type="submit" block="block">
            Submit
          </Button>


        </Form>
      </div>
    );
  }
}
