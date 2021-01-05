import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	return (
		<Context.Consumer>
			{(
				{ store, actions } //Object deconstruction for faster coding
			) => (
				<nav className="navbar navbar-light bg-light mb-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>
					<div className="ml-auto">
						<button className="btn btn-primary" onClick={() => actions.favFilter()}>
							Check the Context in action
						</button>
					</div>
				</nav>
			)}
		</Context.Consumer>
	);
};
