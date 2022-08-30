function setRoadie() {
    fetch(events)
        .then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const events = data;
	    let ptsTotalOut = document.getElementById("ptsTotal");
	    let pts2022Out = document.getElementById("pts2022");
	    let pts2021Out = document.getElementById("pts2021");
	    let pts2020Out = document.getElementById("pts2020");

	    let ridesTotalOut = document.getElementById("ridesTotal");
	    let rides2022Out = document.getElementById("rides2022");
	    let rides2021Out = document.getElementById("rides2021");
	    let rides2020Out = document.getElementById("rides2020");

	    let miTotalRoadOut = document.getElementById("miTotalRoad");
	    let mi2022RoadOut = document.getElementById("mi2022Road");
	    let mi2021RoadOut = document.getElementById("mi2021Road");
	    let mi2020RoadOut = document.getElementById("mi2020Road");

	    let ftTotalRoadOut = document.getElementById("ftTotalRoad");
	    let ft2022RoadOut = document.getElementById("ft2022Road");
	    let ft2021RoadOut = document.getElementById("ft2021Road");
	    let ft2020RoadOut = document.getElementById("ft2020Road");

	    let centTotalOut = document.getElementById("centTotal");
	    let cent2022Out = document.getElementById("cent2022");
	    let cent2021Out = document.getElementById("cent2021");
	    let cent2020Out = document.getElementById("cent2020");

	    let stravTotalOut = document.getElementById("stravTotal");
	    let strav2022Out = document.getElementById("strav2022");
	    let strav2021Out = document.getElementById("strav2021");
	    let strav2020Out = document.getElementById("strav2020");

	    let fenwindTotalOut = document.getElementById("fenwindTotal");
	    let fenwind2022Out = document.getElementById("fenwind2022");
	    let fenwind2021Out = document.getElementById("fenwind2021");
	    let fenwind2020Out = document.getElementById("fenwind2020");

	    let fenTotalOut = document.getElementById("fenTotal");
	    let fen2022Out = document.getElementById("fen2022");
	    let fen2021Out = document.getElementById("fen2021");
	    let fen2020Out = document.getElementById("fen2020");

	    let windTotalOut = document.getElementById("windTotal");
	    let wind2022Out = document.getElementById("wind2022");
	    let wind2021Out = document.getElementById("wind2021");
	    let wind2020Out = document.getElementById("wind2020");

	    let thallTotalOut = document.getElementById("thallTotal");
	    let thall2022Out = document.getElementById("thall2022");
	    let thall2021Out = document.getElementById("thall2021");
	    let thall2020Out = document.getElementById("thall2020");

	    let stravsTotal = 0;
	    let stravs2022 = 0;
	    let stravs2021 = 0;
	    let stravs2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "strathaven") {
		    stravsTotal = stravsTotal + 1;
		    stravTotalOut.innerHTML = stravsTotal;
		    if (events.roadies[i].year === "2022") {
			stravs2022 = stravs2022 + 1;
			strav2022Out.innerHTML = stravs2022;
		    }
		    if (events.roadies[i].year === "2021") {
			stravs2021 = stravs2021 + 1;
			strav2021Out.innerHTML = stravs2021;
		    }
		    if (events.roadies[i].year === "2020") {
			stravs2020 = stravs2020 + 1;
			strav2020Out.innerHTML = stravs2020;
		    }
		}
	    }
	})
}

setRoadie();
