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
        <button onClick={this.startGame}>Start Game</button>
        <Hangman
          incorrectGuesses={this.state.incorrectGuesses}
          hasLost={this.hasLost}
        />
        <Word
          guessedLetter={this.state.guessedLetter}
          splitWord={this.state.splitWord}
          guessedWord={this.state.guessedWord}
          hasWon={this.hasWon}
        />
      </main>
    );
  }

  startGame = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex);
    this.setState(currentState => {
      const selectedWord = currentState.wordOptions[randomIndex];
      const splitWord = selectedWord.split('');
      const guessedWord = selectedWord.replace(/\w/g, '_').split('');
      return {
        selectedWord,
        splitWord,
        guessedWord,
        incorrectGuesses: 0
      };
    });
  };

  hasLost = () => {};

  hasWon = () => {};
}

function Hangman(props) {
  return <p>Number of incorrect guesses: {props.incorrectGuesses}</p>;
}

function Word(props) {
  const newGuessedWord = props.guessedWord.map(letter => {
    return letter + ' ';
  });
  return <p>{newGuessedWord}</p>;
}

export default App;
