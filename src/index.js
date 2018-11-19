import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// This component renders a single button.
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value : null};
	}

	render() {
		return (
			<button className="square" onClick={() => {this.setState({value: 'X'})}}>
			{this.state.value}
			</button>
		);
	}
}

class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i}/>;
	}

	render() {
		return (
			<div className="board">
			<div className="board-row">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</div>

			<div className="board-row">
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
			</div>

			<div className="board-row"></div>
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>
		);
	}
}

ReactDOM.render (
	<Board />,
	document.getElementById('root')
);