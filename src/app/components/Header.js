import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
	
	return (
		<nav className="nav">
			<div className="container">
				<div className="navbar-header">
					<ul>
						<li><Link to={"/home"}>Home</Link></li>
						<li><Link to={"/user/111"}>User</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}