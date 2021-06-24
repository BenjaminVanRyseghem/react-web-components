import LoadingComponent from "components/loadingComponent/loadingComponent";
import PropTypes from "prop-types";
import React from "react";

export default class FakeLoadingComponent extends React.Component {
	static defaultProps = {
		delay: 2000
	};

	static propTypes = {
		children: PropTypes.node.isRequired,
		data: PropTypes.object.isRequired,
		delay: PropTypes.number
	}

	render() {
		return (
			<LoadingComponent promise={new Promise((resolve) => {
				setTimeout(() => {
					resolve(this.props.data);
				}, this.props.delay);
			})}>{this.props.children}</LoadingComponent>
		);
	}
}
