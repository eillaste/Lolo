import React, { Component } from 'react';
import moment from 'moment';

class Preview extends Component {
	render() {
		return (
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a
				className="card"
				onClick={this.props.onclick}
				// href={this.props.link}
				// target=""
				// tabindex="0"
			>
				<div className="preview">
					<p style={{ fontSize: '0.5em' }}>{moment(this.props.date).fromNow()}</p>
					<img src={this.props.image} width={200} height={140} align="right" alt={this.props.description} />
					<h5>{this.props.title}</h5>
					<p className="description" style={{ fontSize: '0.5em' }}>
						{this.props.description}
					</p>
					<p style={{ fontSize: '0.5em' }}>~ {this.props.author}</p>
				</div>
			</a>
		);
	}
}

export default Preview;
