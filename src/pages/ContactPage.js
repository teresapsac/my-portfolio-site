import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

class ContactPage extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      name:'',
      email:'',
      message:'',
      disabled:false,
      emailSent:null,
  
    }
  }  

  handleChange = (event) => {
    const target = event.target; 
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]:value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disable:true,
      emailSent:true
    })

  }



  render(){
    return (
    <div>
      <Hero title={this.props.title}/>
      <Content>
        <form onSubmit={this.handleSubmit}>
          <form.Group>
            <form.Label htmlFor="full-name">Full Name:</form.Label>
            <form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
          </form.Group>

          <form.Group>
            <form.Label htmlFor="email">Email:</form.Label>
            <form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </form.Group>

          <form.Group>
            <form.Label htmlFor="message">Message:</form.Label>
            <form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange}/>
          </form.Group>

          <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
            Send: 
          </Button>

          {this.state.emailSent === true && <p className="d-inline sucess-msg">Email Sent!</p>}
          {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent!</p>}
          
        </form>
      </Content>
    </div>
    );
  }
  
}

export default ContactPage;
