import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Planetscard } from "../component/planetscard";

export class Planetcardview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songs: [],
			categories: {}
		};
	}

	componentDidMount() {
		fetch("https://www.swapi.tech/api/planets/")
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
					return <Planetscard key={item.uid} propPlanet={item} />;
				})}
			</div>
		);
	}
}
