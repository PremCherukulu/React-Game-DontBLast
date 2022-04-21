import React, { Component } from 'react'
import Square from './Square';
import './style.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(14).fill(null),
          selectCount: 0,
          xIsNext: true,
        };
      }

      handleSubmit(){
        if(this.state.selectCount > 0){
            this.setState({
                xIsNext: !this.state.xIsNext,
                selectCount: 0,
                });
        } else { return }
        
        }
      
      handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i] ) {    
                return;
            }

            if(this.state.selectCount < 3){
                squares[i] = this.state.xIsNext ? 'X' : 'O';
                this.setState({
                    squares: squares, 
                    selectCount: this.state.selectCount + 1,
                });
       } else { return}
      }
    
      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
    
  render() {
    const winner = calculateWinner(this.state.squares, this.state.xIsNext);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
        <div className="whole-board">
        <div className="status">{status}</div>
        <br />
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
        </div>
        <div className="board-row">
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
        </div>
        <br />
        <button onClick={()=>this.handleSubmit()}>Confirm</button>
        <br />
        <a href="/"><button>Restart</button></a>
      </div>
    )
  }
}

function calculateWinner(squares, player) {
        const nullArray = squares.filter((i)=>{return i === null});
        if(nullArray.length === 1){
            return player ? 'X' : 'O';
        } else {
            return null
        }    
    
  }
