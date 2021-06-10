import React, { Component } from 'react'
import BoardTwo from './BoardTwo'

export class GameTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = claculateWinner(squares);

        if(winner || squares[i]){
            return ;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            history: history.concat({squares: squares})
        })
    }


    render() {
        console.log('render')
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = claculateWinner(current.squares);

        let status = winner ? 'the winner is ' + winner : 'the next player is ' + (this.state.xIsNext ? 'X' : 'O');

        const moves = this.state.history.map((step, move) => {
            let BtnDescription = move? 'go to #' + move + ' step' : 'NEW GAME';
            return(
                <li key = {move}>
                    <button className='btn-step' onClick={ () => this.jumpTo(move)}>{BtnDescription}</button>
                </li>)
        })

        return (
            <div className='game'>
               <div className='game-board'>
                   <BoardTwo squares={current.squares} onClick={(i) => this.handleClick(i)}/>
               </div>
               <div className='game-info'>
                   <div className='status'>{status}</div>
                <ul>{moves}</ul>
               </div>
            </div>
        )
    }
}

export default GameTwo;
//I AM THE CAPTAIN OF THIS SHIP

function claculateWinner(squares) {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    
    for(let i = 0; i < wins.length; i++){
        const [a, b, c] = wins[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a];
        }
    }
    return null;
}