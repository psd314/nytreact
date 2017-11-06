import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import Results from "./Results.jsx";
import Saved from "./Saved.jsx";
import API from "../utilities/API.js";

class Main extends Component {
	state = {
		results: [],
		topic: "",
		beginningYear: "",
		endingYear: ""
	}

	searchNyt = (query) => {
	    API.getArticles(query)
	      .then(res => this.setState({ results: res.data.response.docs })) 
	      .catch(err => console.log(err)); 
	  };

	handleInputChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	      [name]: value
	    });
  };

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchNyt(this.state);
		console.log(this.state);
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<Search 
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<Results>
					{!this.state.results.length ? (<h3>No results</h3>) : (<h3>Searching...</h3>)}
				</Results>
				<Saved />
			</div>
		);
	}
}

export default Main;