import data from "components/kpi/kpi.json";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import KeyFigureComponent from "components/kpi/keyFigure";
import LoadingCard from "components/loadingCard/loadingCard";
import React from "react";
import registerComponent from "helpers/registerComponent";

class KeyFigure extends React.Component {
	static nodeName = "finsit-keyfigure"

	renderDropdown() {
		return (
			<div className="wk-dropdown wk-is-open wk-dropdown-left">
				<button
					aria-expanded="true"
					aria-haspopup="true"
					className="wk-button wk-button-icon wk-dropdown-toggle"
					type="button"
				>
					<span aria-hidden="true" className="wk-icon-filled-more"/>
					<span className="wk-sr-only">More</span>
				</button>
				<div className="wk-dropdown-menu">
					<div className="wk-dropdown-close-area">
						<button
							className="wk-button wk-button-icon wk-button-close wk-dropdown-close"
							type="button"
						>
							<span aria-hidden="true" className="wk-icon-filled-close"/>
							<span className="wk-sr-only">Close dropdown</span>
						</button>
					</div>
					<ul>
						<li>
							<button className="wk-dropdown-item" type="button">Item 1</button>
						</li>
						<li>
							<button className="wk-dropdown-item" type="button">Item 2</button>
						</li>
						<li>
							<button className="wk-dropdown-item" type="button">Item 3</button>
						</li>
						<li className="wk-dropdown-divider"/>
						<li>
							<button className="wk-dropdown-item" type="button">Item 4</button>
						</li>
						<li>
							<button className="wk-dropdown-item" type="button">Item 5</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				<div className="widget-toolbar">
					TODO DROPDOWN
				</div>
				<div className="widget-content kpi-card-container">
					<FakeLoadingComponent as="kpi" data={data} loader={<LoadingCard/>}>
						<KeyFigureComponent onClick={KeyFigure.triggerExpandView}/>
					</FakeLoadingComponent>
				</div>
			</>
		);
	}
}

KeyFigure.nodeName = "finsit-keyfigure";

export default registerComponent(KeyFigure);
