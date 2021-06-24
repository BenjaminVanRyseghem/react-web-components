import FakeLoadingComponent from "components/fakeLoadingComponent/fakeLoadingComponent";
import LoadingCard from "components/loadingCard/loadingCard";
import PeriodReportCardList from "components/periodReportCardList/periodReportCardList";
import React from "react";
import registerComponent from "helpers/registerComponent";
import summaries from "./periodReportSummary.json";

function PeriodReportArchive() {
	return (
		<FakeLoadingComponent as="summaries" data={summaries} loader={<LoadingCard/>}>
		  <PeriodReportCardList/>
		</FakeLoadingComponent>
	);
}

PeriodReportArchive.nodeName = "finsit-period-reports";

export default registerComponent(PeriodReportArchive);
