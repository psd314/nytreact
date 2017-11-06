import React, { Component } from 'react';
import { Link } from "react-router-dom";

class QueryListItem extends Component {
	render() {
		return (
			<li className="list-group-item">
				<h3><a href={this.props.url}>{this.props.title}</a></h3>
				<button className="btn btn-lg btn-primary">Save</button>				
			</li>
		);
	}
}

export default QueryListItem;