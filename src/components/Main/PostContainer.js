import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'
import Buttons from './Buttons'



class PostContainer extends React.PureComponent {

  componentDidMount() {
    // FIRE A NEW GAME WITH THESE PARAMETERS
    this.props.newGame()
  }

  render() {
    return (
      <div>
        <Hangman word={this.props.game.word} guesses={this.props.game.guesses}/>

        <Buttons makeGuess={this.props.makeGuess} guesses={this.props.game.guesses}/>
        <br/>
        <button onClick={this.props.newGame}>Start a new Game!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(HangmanContainer)
