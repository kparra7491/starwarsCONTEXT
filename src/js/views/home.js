import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Peoplecard } from "../component/peoplecard";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songs: [],
			categories: {}
		};
	}

	componentDidMount() {
		fetch("https://www.swapi.tech/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
					console.log("error after response");
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				this.setState({
					categories: jsonifiedResponse,
					songs: jsonifiedResponse.results
				});
			})

			.catch(function(error) {
				console.log("ya broke it", error);
			});
	}

	render() {
		return (
			<div className="  d-flex contentrow">
				{this.state.songs.map(item => {
					return <Peoplecard key={item.uid} propPerson={item} />;
				})}
			</div>
		);
	}
}

//convert this to a class, pass fetch data into card on componentdidmount
