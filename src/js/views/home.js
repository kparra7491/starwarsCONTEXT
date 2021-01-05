import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Peoplecard } from "../component/peoplecard";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			categories: {}
		};
	}

	componentDidMount() {
		// fetch("https://www.swapi.tech/api/people/")
		// 	.then(function(response) {
		// 		if (!response.ok) {
		// 			throw Error(response.statusText);
		// 			console.log("error after response");
		// 		}
		// 		return response.json();
		// 	})
		// 	.then(jsonifiedResponse => {
		// 		this.setState({
		// 			categories: jsonifiedResponse,
		// 			people: jsonifiedResponse.results
		// 		});
		// 	})
		// 	.catch(function(error) {
		// 		console.log("ya broke it", error);
		// 	});
	}

	render() {
		return (
			<Context.Consumer>
				{(
					{ store, actions } //Object deconstruction for faster coding
				) => (
					<div className="  d-flex contentrow">
						{store.people.map(item => {
							return <Peoplecard key={item.uid} propPerson={item} />;
						})}
					</div>
				)}
			</Context.Consumer>
		);
	}
}

//convert this to a class, pass fetch data into card on componentdidmount
