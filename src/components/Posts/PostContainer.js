import * as React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

class PostContainer extends React.PureComponent {

  componentDidMount() {

  }

  render() {
    return (
      <div>

        <Post />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {  })(PostContainer)
