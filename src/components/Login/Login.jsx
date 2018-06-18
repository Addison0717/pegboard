import React from 'react';



class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      LoginMail: '',
      LoginPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({LoginMail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({LoginPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    // fetch('', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //   email: this.state.LoginMail,
    //   password: this.state.LoginPassword
    //   })
    // })
    .then(response => response.json())
    .then(user => {
      if (user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');

      }
    })
  }
  render() {
    const { onRouteChange } = this.props;
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">

            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

            </fieldset>

        </main>
        </article>
    );
  }
}

export default Login;
