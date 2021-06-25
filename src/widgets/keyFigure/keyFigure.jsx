import data from "components/kpi/kpi.json";
import KeyFigureComponent from "components/kpi/keyFigure";
import React from "react";
import registerComponent from "helpers/registerComponent";

class KeyFigure extends React.Component {
	static nodeName = "finsit-keyfigure";

	state = {
		dropdownOpen: false,
		selectedKPI: data[0]
	}

	selectEntry(index) {
		this.setState({
			dropdownOpen: false,
			selectedKPI: data[index]
		});
	}

	renderEntry(name, index) {
		return (
			<li>
				<button
					className="wk-dropdown-item"
					type="button"
					onClick={this.selectEntry.bind(this, index)}
				>
					{name}
				</button>
			</li>
		);
	}

	renderDropdown() {
		return (
			<div className={`wk-dropdown wk-dropdown-right ${this.state.dropdownOpen ? "wk-is-open" : ""}`}>
				<button
					aria-expanded="true"
					aria-haspopup="true"
					className="wk-button wk-button-small wk-button-icon wk-dropdown-toggle"
					type="button"
					onClick={() => this.setState(({ dropdownOpen }) => ({ dropdownOpen: !dropdownOpen }))}
				>
					<span className={`wk-icon-chevron-${this.state.dropdownOpen ? "up" : "down"}`}/> {this.state.selectedKPI.name}
				</button>
				<div className="wk-dropdown-menu">
					<div className="wk-dropdown-close-area">
						<button
							className="wk-button wk-button-icon wk-button-close wk-dropdown-close"
							type="button"
							onClick={() => this.setState({ dropdownOpen: false })}
						>
							<span aria-hidden="true" className="wk-icon-filled-close"/>
							<span
								className="wk-sr-only"
							>Close dropdown</span>
						</button>
					</div>
					<ul>
						{data.map(({ name }, index) => this.renderEntry(name, index))}
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				<div className="widget-toolbar">
					<div className="wk-button-group-right">
						{this.renderDropdown()}
					</div>
				</div>
				<div className="widget-content kpi-card-container">
					<KeyFigureComponent kpi={this.state.selectedKPI} onClick={KeyFigure.triggerExpandView}/>
				</div>
			</>
		);
	}
}

export default registerComponent(KeyFigure);
