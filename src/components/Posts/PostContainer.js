import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { makePost } from '../../actions/posts'

import User from '../User/User'

class PostContainer extends React.PureComponent {

  state = {  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makePost({

      category: this.state.category,
      type: this.state.type,
      name: this.state.name,
      description: this.state.description

    })

  }

  componentDidMount() {

    console.log(this)

  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <label>

            <div className="formElement">
            <h2>carpenter</h2>
            <input type="radio" name="category" value="carpenter" onChange={this.handleChange}/>

            <h2>designer</h2>
            <input type="radio" name="category" value="designer" onChange={this.handleChange}/>

            <h2>cook</h2>
            <input type="radio" name="category" value="cook" onChange={this.handleChange}/>

            <h2>developer</h2>
            <input type="radio" name="category" value="developer" onChange={this.handleChange}/>
            </div>

          </label>

          <label>

            <div className="formElement">
            <h2>Employer</h2>
            <input type="radio" name="type" value="employer" onChange={this.handleChange}/>

            <h2>Freelancer</h2>
            <input type="radio" name="type" value="freelancer" onChange={this.handleChange}/>
            </div>

          </label>


          <div className="formElement">
              <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange}/>
            </label>

            <label>
              Description:
              <input type="text" name="description" onChange={this.handleChange}/>
            </label>
          </div>

          <input type="submit" value="Submit" />

        </form>

        <div>

          {this.props.post.carpenter.employer.length > 0 &&
            <button>Carpenter [employer]:</button>

          }
          {this.props.post.carpenter.freelancer.length > 0 &&
            <button>Carpenter [freelancer]:</button>
          }
          {this.props.post.designer.employer.length > 0 &&
            <button>Designer [employer]:</button>
          }
          {this.props.post.designer.freelancer.length > 0 &&
            <button>Designer [freelancer]:</button>
          }
          {this.props.post.cook.employer.length > 0 &&
            <button>Cook [employer]:</button>
          }
          {this.props.post.cook.freelancer.length > 0 &&
            <button>Cook [freelancer]:</button>
          }
          {this.props.post.developer.employer.length > 0 &&
            <button>Developer [employer]:</button>
          }
          {this.props.post.developer.freelancer.length > 0 &&
            <button>Developer [freelancer]:</button>
          }

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts
  }
}

export default connect(mapStateToProps, { makePost })(PostContainer)
