import React, { Component } from "react";

class Saved extends Component {
	render() {
		return (
			<div className="row" style={{paddingTop: 50}}>
				<div className="col-12">
					<div className="card" >
					  <div className="card-block">
					    <div className="alert alert-info card-title" role="alert">
						  <h1>Saved Articles</h1>
						</div>
					  </div>
					</div>
				</div>
			</div>	
		)
	}
}

export default Saved;