import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import chewie from "../../img/chewie.jpg";
import "../../styles/peoplecard.scss";

export class Planetscard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			planet: {
				message: "",
				result: {
					properties: {
						height: "",
						mass: "",
						hair_color: "",
						skin_color: "",
						eye_color: "",
						birth_year: "",
						gender: "",
						created: "",
						edited: "",
						name: "",
						homeworld: "",
						url: ""
					},
					description: "",
					_id: "",
					uid: "",
					__v: 0
				}
			}
		};
	}

	componentDidMount() {
		fetch(this.props.propPlanet.url + "/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
					console.log("error after response");
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				this.setState({
					planet: jsonifiedResponse
				});
			})
			.catch(function(error) {
				console.log("ya broke it", error);
			});
	}

	render() {
		return (
			<div className="  itemcards ">
				<img className="placeholder" src={chewie} alt="Card image cap" />
				<div className="body">
					<div className="title ">{this.state.planet.result.properties.name}</div>
					<div className="text " />
					<Link
						to={{
							pathname: "/planets/" + this.state.planet.uid,
							state: { personInfoProp: this.state.planet }
						}}>
						<button className="btn btn-secondary" type="button">
							Learn More!
						</button>
					</Link>
					<button className="btn btn-secondary" type="button">
						Favorite
					</button>
				</div>
			</div>
		);
	}
}

Planetscard.propTypes = {
	propPlanet: PropTypes.object
};
