import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import chewie from "../../img/chewie.jpg";
import "../../styles/peoplecard.scss";

export class Peoplecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
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
		fetch(this.props.propPerson.url + "/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
					console.log("error after response");
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				this.setState({
					person: jsonifiedResponse
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
					<div className="title ">{this.state.person.result.properties.name}</div>
					<div className="text ">
						{this.state.person.result.description}
						{this.state.person.result.properties.height}
						{this.state.person.result.properties.mass}
					</div>
					<Link
						to={{
							pathname: "/people/" + this.state.person.result.uid,
							state: { personInfoProp: this.state.person }
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

Peoplecard.propTypes = {
	propPerson: PropTypes.object
};
