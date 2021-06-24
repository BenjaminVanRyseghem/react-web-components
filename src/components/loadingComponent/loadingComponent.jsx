import PropTypes from "prop-types";
import React from "react";

function Loader() {
	return "LOADING...";
}

export default class LoadingComponent extends React.Component {
	static defaultProps = {
		as: "data",
		loader: <Loader/>
	};

	static propTypes = {
		as: PropTypes.string,
		children: PropTypes.node.isRequired,
		loader: PropTypes.node,
		promise: PropTypes.object.isRequired
	};

	state = {
		data: undefined
	};

	componentDidMount() {
		this.props.promise.then((data) => this.setState({ data }));
	}

	renderLoading() {
		return this.props.loader;
	}

	renderEmpty() {
		return (
			<div className="empty">{"No data found"}</div>
		);
	}

	render() {
		if (this.state.data === undefined) {
			return this.renderLoading();
		}

		if (this.state.data === null || (Array.isArray(this.state.data) && this.state.data.length === 0)) {
			return this.renderEmpty();
		}

		return (
			<div className="loadingComponent">
				{React.cloneElement(this.props.children, { [this.props.as]: this.state.data })}
			</div>
		);
	}
}
