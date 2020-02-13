import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    wordOptions: [
      'jellyfish',
      'peanut',
      'tomorrow',
      'platypus',
      'extradite',
      'fluff',
      'discombobulated',
      'react',
      'function',
      'hangman'
    ],
    selectedWord: '',
    splitWord: [],
    guessedWord: [],
    guessedLetter: '',
    incorrectGuesses: 0
  };

  render() {
    return (
      <main>
        <header>
          <h1>Hangman Game</h1>
        </header>
        <button>Start Game</button>
        <Hangman
          incorrectGuesses={this.state.incorrectGuesses}
          hasLost={this.hasLost}
        />
      </main>
    );
  }

  hasLost = () => {};
}

function Hangman(props) {
  return(
    <p>Number of incorrect guesses: {props.incorrectGuesses}</p>
  )
}

export default App;
