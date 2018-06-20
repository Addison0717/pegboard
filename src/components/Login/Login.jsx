import React from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginMail: '',
      LoginPassword: '',
      loginToHome: false
      }
  }
  onEmailChange = (event) => {
    this.setState({LoginMail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({LoginPassword: event.target.value})
  }

  onSubmitLogin = () => {
    // Handle Login
    // onEmailChange() === !null
    // onPasswordChange() === !null

    // .then(user => {
      this.setState({loginToHome: true})
    // })
  }
  render() {

    return (<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
               name="email-address"
               id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
               name="password"
                id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign in"
            onClick={this.onSubmitLogin}
            />
        </div>
        <div className="mv3">
          <Link className="link underline blue hover-orange" to="/Register">Not A Member?</Link><br/>
          <Link  to="/Register"><input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            name="Register-redirect"
            id="Register-redirect"
             type="button" value="Register"/></Link>

        </div>
      </main>
      <div>{this.state.loginToHome === true && < Redirect to = '/home' />}</div>
    </article>);
  }
}

export default Login;
