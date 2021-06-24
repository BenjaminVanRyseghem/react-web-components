import PropTypes from "prop-types";
import React from "react";

function Loader() {
	return "LOADING...";
}

export default class LoadingComponent extends React.Component {
	static defaultProps = {
		as: "data"
	};

	static propTypes = {
		children: PropTypes.node.isRequired,
		promise: PropTypes.object.isRequired
	};

	state = {
		data: undefined
	};

	componentDidMount() {
		this.props.promise.then((data) => this.setState({ data }));
	}

	renderLoading() {
		return (
			<Loader/>
		);
	}

	renderEmpty() {
		return (
			<div className="empty">{"No data found"}</div>
		);
	}

	render() {
		if (!this.state.data === undefined) {
			return this.renderLoading();
		}

		if (this.state.data === null || (Array.isArray(this.state.data) && this.state.data.length === 0)) {
			return this.renderEmpty();
		}

		return (
			<div className="loadingComponent">
				{React.cloneElement(this.props.children[0], { data: this.state.data })}
			</div>
		);
	}
}
