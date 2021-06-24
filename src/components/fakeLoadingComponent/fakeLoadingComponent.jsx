import LoadingComponent from "components/loadingComponent/loadingComponent";
import PropTypes from "prop-types";
import React from "react";

export default class FakeLoadingComponent extends React.Component {
	static defaultProps = {
		delay: process.env.NODE_ENV === "development" ? 0 : 2000 // eslint-disable-line no-process-env
	};

	static propTypes = {
		children: PropTypes.node.isRequired,
		data: PropTypes.object.isRequired,
		delay: PropTypes.number
	}

	render() {
		let { data, delay, children, ...others } = this.props;

		return (
			<LoadingComponent promise={new Promise((resolve) => {
				if (!delay) {
					resolve(data);
					return;
				}

				setTimeout(() => {
					resolve(data);
				}, delay);
			})} {...others}>{children}</LoadingComponent>
		);
	}
}
