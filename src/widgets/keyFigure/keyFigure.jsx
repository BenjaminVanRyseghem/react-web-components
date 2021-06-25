import data from "components/kpi/kpi.json";
import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import KeyFigureComponent from "components/kpi/keyFigure";
import LoadingCard from "components/loadingCard/loadingCard";
import React from "react";
import registerComponent from "helpers/registerComponent";

function KeyFigure() {
	return (
		<>
			<div className="widget-toolbar">
				TODO DROPDOWN
			</div>
			<div className="widget-content">
				<FakeLoadingComponent as="kpi" data={data} loader={<LoadingCard/>}>
					<KeyFigureComponent onClick={KeyFigureComponent.triggerExpandView}/>
				</FakeLoadingComponent>
			</div>
		</>
	);
}

KeyFigure.nodeName = "finsit-keyfigure";

export default registerComponent(KeyFigure);
