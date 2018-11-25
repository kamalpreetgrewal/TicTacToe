import React, {Component} from 'react';

import './tile.css';

class Tile extends Component {
	tileClick(props) {
		this.props.updateBoard(props.location, props.turn);
	}

	render() {
		return (
			<div className={"tile " + this.props.location}
			onClick={() => this.tileClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}

export default Tile;