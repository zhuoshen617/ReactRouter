import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {
	onNavToHome() {
		browserHistory.push("/home");
	}
	render() {
		return (
			<div className="container">
				<h3>The User Page</h3>
				<p>User ID: {this.props.params.id}</p>
				<button onClick={this.onNavToHome}>Go Home!</button>
			</div>
		);
	}
}