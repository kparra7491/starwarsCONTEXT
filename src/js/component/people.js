import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class People extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		let info = Object.values(this.props.location.state.personInfoProp.result.properties);
		let labels = Object.keys(this.props.location.state.personInfoProp.result.properties);

		return (
			<div className="card mb-3" style={{ width: "80%" }}>
				<div className="row no-gutters">
					<div className="col-md-4" />
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{info.name}</h5>
							<div className="card-text">
								<ul className=" ">
									{info.map((item, i) => {
										let infoLabel = labels[i].split("_").join(" ");
										let Nonwants = ["created", "edited", "name", "url", "homeworld"];

										if (!Nonwants.includes(infoLabel)) {
											return (
												<li className="d-flex flex-row" key={i}>
													<div className="col-4">{infoLabel.toUpperCase()}</div>
													<div className="col-auto">{item.toUpperCase()}</div>
												</li>
											);
										}
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

People.propTypes = {
	personInfoProp: PropTypes.object,
	location: PropTypes.object
};
