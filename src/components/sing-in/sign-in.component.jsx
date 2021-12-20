import React from 'react'

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }
    // this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({email:'', password:''})
  }

  handleChange = event => {
      const {value, name} = event.target
      this.setState({[name] : value})
  }

  render() {
    return (
      <div className="">
        <h2 className="">I already have an account</h2>
        <span className="">Sign in with your password</span>

        <form onSubmit={this.onSubmit}>

            <input name="email" type="email" value={this.state.email} required onChange={this.handleChange}/>
            <label htmlFor="email">Email</label>
            
            <input name="password" type="password" value={this.state.password} required onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>

            <input name="submit" type="submit" value="Submit Form"/>
            


        </form>
      </div>
    )
  }
}

export default SignIn
