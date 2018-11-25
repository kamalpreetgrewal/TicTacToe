import React, {Component} from 'react';

import './announcement.css';

class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? 'visible' : 'hidden'}>
				<h2>Game over</h2>
			</div>
		)
	}
}

export default Announcement;