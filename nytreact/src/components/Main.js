import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import Results from "./Results.jsx";
import Saved from "./Saved.jsx";

class Main extends Component {

	render() {
		return (
			<div className="container">
				<Navbar />
				<Search />
				<Results />
				<Saved />
			</div>
		);
	}
}

export default Main;