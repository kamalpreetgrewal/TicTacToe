import React from 'react';
// import ReactDOM from 'react-dom';
import './app.css';

import Announcement from './announcement';
import ResetButton from './resetbutton';
import Tile from './tile';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [
				'x', 'o', ' ',
				' ', ' ', ' ',
				' ', ' ', ' '	
			],
			turn: 'x',
			winner: null
		}
	}

	updateBoard(location, player) {

	}

	resetBoard() {
		this.setState({
			gameBoard: [
				' ', ' ', ' ',
				' ', ' ', ' ',
				' ', ' ', ' '	
			],
			turn: 'x',
			winner: null
		});
	}

	render() {
		return (
			<div className="container">
				<div className="menu">
					<h1>Tic Tac Toe</h1>
					<Announcement winner = {this.state.winner} />
					<ResetButton reset = {this.resetBoard.bind(this)}/>
				</div>
				{this.state.gameBoard.map(function(value, i) {
					return (
						<Tile 
							key = {i}
							location = {i}
							value = {value}
							updateBoard = {this.updateBoard.bind(this)}
							turn = {this.state.turn} />
					)
				}.bind(this))}
			</div>
		);
	}
}

export default App;