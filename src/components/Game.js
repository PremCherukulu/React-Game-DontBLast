import React, { Component } from 'react'
import Board from './Board'
import './style.css';

export default class Game extends Component {
  render() {
    return (
        <div className="game">
            <h1 className="game-name">Don't B Last</h1>
            
        <div className="game-board">
          <Board />
        </div>
        <br />
        <div className="game-info">
          <div>Game Rules:</div>
          <ol>Each player can select upto 3 boxes</ol>
          <ol>Kindly click on confirm once you have selected your box or boxes to change player</ol>
          <ol>Just make sure that the last box to select is not yours to win the game</ol>
          <ol>Click on Restart if you and your opponent agree to restart the game at any point and after the game</ol>
        </div>
      </div>
    )
  }
}
