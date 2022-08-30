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

	    let thallTotalOut = document.getElementById("thallTotalRoad");
	    let thall2022Out = document.getElementById("thall2022Road");
	    let thall2021Out = document.getElementById("thall2021Road");
	    let thall2020Out = document.getElementById("thall2020Road");

	    let ptsTotal = 0;
	    let pts2022 = 0;
	    let pts2021 = 0;
	    let pts2020 = 0;

	    //...
	    
	    let ridesTotal = events.roadies.length;
	    let rides2022 = 0;
	    let rides2021 = 0;
	    let rides2020 = 0;

	    ridesTotalOut.innerHTML = ridesTotal;

	    for (var i in events.roadies) {
	        if (events.roadies[i].year === "2022") {
		    rides2022 = rides2022 + 1;
		    rides2022Out.innerHTML = rides2022;
		}
	        if (events.roadies[i].year === "2021") {
		    rides2021 = rides2021 + 1;
		    rides2021Out.innerHTML = rides2021;
		}
	        if (events.roadies[i].year === "2020") {
		    rides2020 = rides2020 + 1;
		    rides2020Out.innerHTML = rides2020;
		}
	    }

	    let miTotalRoad = 0;
	    let mi2022Road = 0;
	    let mi2021Road = 0;
	    let mi2020Road = 0;

	    for (var i in events.roadies) {
		miTotalRoad = miTotalRoad + events.roadies[i].dist;
		miTotalRoadOut.innerHTML = miTotalRoad.toLocaleString("en-US") + "mi";
		if (events.roadies[i].year === "2022") {
		    mi2022Road = mi2022Road + events.roadies[i].dist;
		    mi2022RoadOut.innerHTML = mi2022Road.toLocaleString("en-US") + "mi";
		}
		if (events.roadies[i].year === "2021") {
		    mi2021Road = mi2021Road + events.roadies[i].dist;
		    mi2021RoadOut.innerHTML = mi2021Road.toLocaleString("en-US") + "mi";
		}
		if (events.roadies[i].year === "2020") {
		    mi2020Road = mi2020Road + events.roadies[i].dist;
		    mi2020RoadOut.innerHTML = mi2020Road.toLocaleString("en-US") + "mi";
		}
	    }

	    let ftTotalRoad = 0;
	    let ft2022Road = 0;
	    let ft2021Road = 0;
	    let ft2020Road = 0;

	    for (var i in events.roadies) {
		ftTotalRoad = ftTotalRoad + events.roadies[i].elev;
		ftTotalRoadOut.innerHTML = ftTotalRoad.toLocaleString("en-US") + "ft";
		if (events.roadies[i].year === "2022") {
		    ft2022Road = ft2022Road + events.roadies[i].elev;
		    ft2022RoadOut.innerHTML = ft2022Road.toLocaleString("en-US") + "ft";
		}
		if (events.roadies[i].year === "2021") {
		    ft2021Road = ft2021Road + events.roadies[i].elev;
		    ft2021RoadOut.innerHTML = ft2021Road.toLocaleString("en-US") + "ft";
		}
		if (events.roadies[i].year === "2020") {
		    ft2020Road = ft2020Road + events.roadies[i].elev;
		    ft2020RoadOut.innerHTML = ft2020Road.toLocaleString("en-US") + "ft";
		}
	    }

	    let centTotal = 0;
	    let cent2022 = 0;
	    let cent2021 = 0;
	    let cent2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "century") {
		    centTotal = centTotal + 1;
		    centTotalOut.innerHTML = centTotal;
		    if (events.roadies[i].year === "2022") {
			cent2022 = cent2022 + 1;
			cent2022Out.innerHTML = cent2022;
		    }
		    if (events.roadies[i].year === "2021") {
			cent2021 = cent2021 + 1;
			cent2021Out.innerHTML = cent2021;
		    }
		    if (events.roadies[i].year === "2020") {
			cent2020 = cent2020 + 1;
			cent2020Out.innerHTML = cent2020;
		    }
		} else {
		    centTotal = centTotal;
		    cent2022 = cent2022;
		    cent2021 = cent2021;
		    cent2020 = cent2020;
		    centTotalOut.innerHTML = centTotal;
		    cent2022Out.innerHTML = cent2022;
		    cent2021Out.innerHTML = cent2021;
		    cent2020Out.innerHTML = cent2020;
		}
	    }

	    let stravTotal = 0;
	    let strav2022 = 0;
	    let strav2021 = 0;
	    let strav2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "strathaven") {
		    stravTotal = stravTotal + 1;
		    stravTotalOut.innerHTML = stravTotal;
		    if (events.roadies[i].year === "2022") {
			strav2022 = strav2022 + 1;
			strav2022Out.innerHTML = strav2022;
		    }
		    if (events.roadies[i].year === "2021") {
			strav2021 = strav2021 + 1;
			strav2021Out.innerHTML = strav2021;
		    }
		    if (events.roadies[i].year === "2020") {
			strav2020 = strav2020 + 1;
			strav2020Out.innerHTML = strav2020;
		    }
		} else {
		    stravTotal = stravTotal;
		    strav2022 = strav2022;
		    strav2021 = strav2021;
		    strav2020 = strav2020;
		    stravTotalOut.innerHTML = stravTotal;
		    strav2022Out.innerHTML = strav2022;
		    strav2021Out.innerHTML = strav2021;
		    strav2020Out.innerHTML = strav2020;
		}
	    }

	    let fenwindTotal = 0;
	    let fenwind2022 = 0;
	    let fenwind2021 = 0;
	    let fenwind2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "fenwickwindfarm") {
		    fenwindTotal = fenwindTotal + 1;
		    fenwindTotalOut.innerHTML = fenwindTotal;
		    if (events.roadies[i].year === "2022") {
			fenwind2022 = fenwind2022 + 1;
			fenwind2022Out.innerHTML = fenwind2022;
		    }
		    if (events.roadies[i].year === "2021") {
			fenwind2021 = fenwind2021 + 1;
			fenwind2021Out.innerHTML = fenwind2021;
		    }
		    if (events.roadies[i].year === "2020") {
			fenwind2020 = fenwind2020 + 1;
			fenwind2020Out.innerHTML = fenwind2020;
		    }
		} else {
		    fenwindTotal = fenwindTotal;
		    fenwind2022 = fenwind2022;
		    fenwind2021 = fenwind2021;
		    fenwind2020 = fenwind2020;
		    fenwindTotalOut.innerHTML = fenwindTotal;
		    fenwind2022Out.innerHTML = fenwind2022;
	            fenwind2021Out.innerHTML = fenwind2021;
		    fenwind2020Out.innerHTML = fenwind2020;
		}
	    }

	    let fenTotal = 0;
	    let fen2022 = 0;
	    let fen2021 = 0;
	    let fen2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "fenwick") {
		    fenTotal = fenTotal + 1;
		    fenTotalOut.innerHTML = fenTotal;
		    if (events.roadies[i].year === "2022") {
			fen2022 = fen2022 + 1;
			fen2022Out.innerHTML = fen2022;
		    }
		    if (events.roadies[i].year === "2021") {
			fen2021 = fen2021 + 1;
			fen2021Out.innerHTML = fen2021;
		    }
		    if (events.roadies[i].year === "2020") {
			fen2020 = fen2020 + 1;
			fen2020Out.innerHTML = fen2020;
		    }
		} else {
		    fenTotal = fenTotal;
		    fen2022 = fen2022;
		    fen2021 = fen2021;
		    fen2020 = fen2020;
  		    fenTotalOut.innerHTML = fenTotal;
		    fen2022Out.innerHTML = fen2022;
		    fen2021Out.innerHTML = fen2021;
		    fen2020Out.innerHTML = fen2020;
		}
	    }

	    let windTotal = 0;
	    let wind2022 = 0;
	    let wind2021 = 0;
	    let wind2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "windfarm") {
		    windTotal = windTotal + 1;
		    windTotalOut.innerHTML = windTotal;
		    if (events.roadies[i].year === "2022") {
			wind2022 = wind2022 + 1;
			wind2022Out.innerHTML = wind2022;
		    }
		    if (events.roadies[i].year === "2021") {
			wind2021 = wind2021 + 1;
			wind2021Out.innerHTML = wind2021;
		    }
		    if (events.roadies[i].year === "2020") {
			wind2020 = wind2020 + 1;
			wind2020Out.innerHTML = wind2020;
		    }
		} else {
		    windTotal = windTotal;
		    wind2022 = wind2022;
		    wind2021 = wind2021;
		    wind2020 = wind2020;
		    windTotalOut.innerHTML = windTotal;
		    wind2022Out.innerHTML = wind2022;
		    wind2021Out.innerHTML = wind2021;
		    wind2020Out.innerHTML = wind2020;
		}
	    }

	    let thallTotal = 0;
	    let thall2022 = 0;
	    let thall2021 = 0;
	    let thall2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "thorntonhall") {
		    thallTotal = thallTotal + 1;
		    thallTotalOut.innerHTML = thallTotal;
		    if (events.roadies[i].year === "2022") {
			thall2022 = thall2022 + 1;
			thall2022Out.innerHTML = thall2022;
		    }
		    if (events.roadies[i].year === "2021") {
			thall2021 = thall2021 + 1;
			thall2021Out.innerHTML = thall2021;
		    }
		    if (events.roadies[i].year === "2020") {
			thall2020 = thall2020 + 1;
			thall2020Out.innerHTML = thall2020;
		    }
		} else {
		    thallTotal = thallTotal;
		    thall2022 = thall2022;
		    thall2021 = thall2021;
		    thall2020 = thall2020;
		    thallTotalOut.innerHTML = thallTotal;
		    thall2022Out.innerHTML = thall2022;
		    thall2021Out.innerHTML = thall2021;
		    thall2020Out.innerHTML = thall2020;
		}
	    }
	})
}

setRoadie();

function setHike() {
    fetch(events)
        .then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const events = data;

	    let hikesTotalOut = document.getElementById("hikesTotal");
	    let hikes2022Out = document.getElementById("hikes2022");
	    let hikes2021Out = document.getElementById("hikes2021");
	    let hikes2020Out = document.getElementById("hikes2020");

	    let miTotalHikeOut = document.getElementById("miTotalHike");
	    let mi2022HikeOut = document.getElementById("mi2022Hike");
	    let mi2021HikeOut = document.getElementById("mi2021Hike");
	    let mi2020HikeOut = document.getElementById("mi2020Hike");

	    let ftTotalHikeOut = document.getElementById("ftTotalHike");
	    let ft2022HikeOut = document.getElementById("ft2022Hike");
	    let ft2021HikeOut = document.getElementById("ft2021Hike");
	    let ft2020HikeOut = document.getElementById("ft2020Hike");

	    let islandsTotalOut = document.getElementById("islandsTotal");
	    let islands2022Out = document.getElementById("islands2022");
	    let islands2021Out = document.getElementById("islands2021");
	    let islands2020Out = document.getElementById("islands2020");

	    let munrosTotalOut = document.getElementById("munrosTotal");
	    let munros2022Out = document.getElementById("munros2022");
	    let munros2021Out = document.getElementById("munros2021");
	    let munros2020Out = document.getElementById("munros2020");

	    let corbsTotalOut = document.getElementById("corbsTotal");
	    let corbs2022Out = document.getElementById("corbs2022");
	    let corbs2021Out = document.getElementById("corbs2021");
	    let corbs2020Out = document.getElementById("corbs2020");

	    let grahamsTotalOut = document.getElementById("grahamsTotal");
	    let grahams2022Out = document.getElementById("grahams2022");
	    let grahams2021Out = document.getElementById("grahams2021");
	    let grahams2020Out = document.getElementById("grahams2020");

	    let subsTotalOut = document.getElementById("subsTotal");
	    let subs2022Out = document.getElementById("subs2022");
	    let subs2021Out = document.getElementById("subs2021");
	    let subs2020Out = document.getElementById("subs2020");

	    let donsTotalOut = document.getElementById("donsTotalRoad");
	    let dons2022Out = document.getElementById("dons2022Road");
	    let dons2021Out = document.getElementById("dons2021Road");
	    let dons2020Out = document.getElementById("dons2020Road");

	    let hikesTotal = events.hikes.length;
	    let hikes2022 = 0;
	    let hikes2021 = 0;
	    let hikes2020 = 0;

	    hikesTotalOut.innerHTML = hikesTotal;

	    for (var i in events.hikes) {
	        if (events.hikes[i].year === "2022") {
		    hikes2022 = hikes2022 + 1;
		    hikes2022Out.innerHTML = hikes2022;
		}
	        if (events.hikes[i].year === "2021") {
		    hikes2021 = hikes2021 + 1;
		    hikes2021Out.innerHTML = hikes2021;
		}
	        if (events.hikes[i].year === "2020") {
		    hikes2020 = hikes2020 + 1;
		    hikes2020Out.innerHTML = hikes2020;
		}
	    }
	
	    let miTotalHike = 0;
	    let mi2022Hike = 0;
	    let mi2021Hike = 0;
	    let mi2020Hike = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    miTotalHike = miTotalHike + events.hikes[i].dist;
		    for (var k in events.hikes[i].subHike) {
			miTotalHike = miTotalHike + events.hikes[i].subHike[k].dist;
		    }
		} else {
		    miTotalHike = miTotalHike + events.hikes[i].dist;
		}
		miTotalHikeOut.innerHTML = miTotalHike.toLocaleString("en-US") + "mi";

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        mi2022Hike = mi2022Hike + events.hikes[i].dist;
		        for (var k in events.hikes[i].subHike) {
			    mi2022Hike = mi2022Hike + events.hikes[i].subHike[k].dist;
		        }
		    } else {
		        mi2022Hike = mi2022Hike + events.hikes[i].dist;
		    }
		    mi2022HikeOut.innerHTML = mi2022Hike.toLocaleString("en-US") + "mi";
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        mi2021Hike = mi2021Hike + events.hikes[i].dist;
		        for (var k in events.hikes[i].subHike) {
			    mi2021Hike = mi2021Hike + events.hikes[i].subHike[k].dist;
		        }
		    } else {
		        mi2021Hike = mi2021Hike + events.hikes[i].dist;
		    }
		    mi2021HikeOut.innerHTML = mi2021Hike.toLocaleString("en-US") + "mi";
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        mi2020Hike = mi2020Hike + events.hikes[i].dist;
		        for (var k in events.hikes[i].subHike) {
			    mi2020Hike = mi2020Hike + events.hikes[i].subHike[k].dist;
		        }
		    } else {
		        mi2020Hike = mi2020Hike + events.hikes[i].dist;
		    }
		    mi2020HikeOut.innerHTML = mi2020Hike.toLocaleString("en-US") + "mi";
		}
	    }

	    let ftTotalHike = 0;
	    let ft2022Hike = 0;
	    let ft2021Hike = 0;
	    let ft2020Hike = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    ftTotalHike = ftTotalHike + events.hikes[i].elev;
		    for (var k in events.hikes[i].subHike) {
			ftTotalHike = ftTotalHike + events.hikes[i].subHike[k].elev;
		    }
		} else {
		    ftTotalHike = ftTotalHike + events.hikes[i].elev;
		}
		ftTotalHikeOut.innerHTML = ftTotalHike.toLocaleString("en-US") + "ft";

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        ft2022Hike = ft2022Hike + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    ft2022Hike = ft2022Hike + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        ft2022Hike = ft2022Hike + events.hikes[i].elev;
		    }
		    ft2022HikeOut.innerHTML = ft2022Hike.toLocaleString("en-US") + "ft";
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        ft2021Hike = ft2021Hike + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    ft2021Hike = ft2021Hike + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        ft2021Hike = ft2021Hike + events.hikes[i].elev;
		    }
		    ft2021HikeOut.innerHTML = ft2021Hike.toLocaleString("en-US") + "ft";
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        ft2020Hike = ft2020Hike + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    ft2020Hike = ft2020Hike + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        ft2020Hike = ft2020Hike + events.hikes[i].elev;
		    }
		    ft2020HikeOut.innerHTML = ft2020Hike.toLocaleString("en-US") + "ft";
		}
	    }

	    let munrosTotalCol = [];
	    let munros2022Col = [];
	    let munros2021Col = [];
	    let munros2020Col = [];

	    let munrosTotalColUnq = [];
	    let munros2022ColUnq = [];
	    let munros2021ColUnq = [];
	    let munros2020ColUnq = [];

	    let munrosTotal = 0;
	    let munros2022 = 0;
	    let munros2021 = 0;
	    let munros2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].munros) {
			munrosTotalCol.push(events.hikes[i].munros[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].munros) {
			    munrosTotalCol.push(events.hikes[i].subHike[k].munros[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].munros) {
			munrosTotalCol.push(events.hikes[i].munros[k])
		    }
		}
		munrosTotalColUnq = [...new Set(munrosTotalCol.sort())];
		munrosTotal = munrosTotalColUnq.length;
		//munrosTotalOut.innerHTML = munrosTotal;
		munrosTotalOut.innerHTML = munrosTotalColUnq.join("<br>");

		/*
		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        munros2022 = munros2022 + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    munros2022 = munros2022 + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        munros2022 = munros2022 + events.hikes[i].elev;
		    }
		    munros2022Out.innerHTML = munros2022.toLocaleString("en-US") + "ft";
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        munros2021 = munros2021 + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    munros2021 = munros2021 + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        munros2021 = munros2021 + events.hikes[i].elev;
		    }
		    munros2021Out.innerHTML = munros2021.toLocaleString("en-US") + "ft";
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        munros2020 = munros2020 + events.hikes[i].elev;
		        for (var k in events.hikes[i].subHike) {
			    munros2020 = munros2020 + events.hikes[i].subHike[k].elev;
		        }
		    } else {
		        munros2020 = munros2020 + events.hikes[i].elev;
		    }
		    munros2020Out.innerHTML = munros2020.toLocaleString("en-US") + "ft";
		}
		*/
	    }

	    /*
	    let stravTotal = 0;
	    let strav2022 = 0;
	    let strav2021 = 0;
	    let strav2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "strathaven") {
		    stravTotal = stravTotal + 1;
		    stravTotalOut.innerHTML = stravTotal;
		    if (events.roadies[i].year === "2022") {
			strav2022 = strav2022 + 1;
			strav2022Out.innerHTML = strav2022;
		    }
		    if (events.roadies[i].year === "2021") {
			strav2021 = strav2021 + 1;
			strav2021Out.innerHTML = strav2021;
		    }
		    if (events.roadies[i].year === "2020") {
			strav2020 = strav2020 + 1;
			strav2020Out.innerHTML = strav2020;
		    }
		} else {
		    stravTotal = stravTotal;
		    strav2022 = strav2022;
		    strav2021 = strav2021;
		    strav2020 = strav2020;
		    stravTotalOut.innerHTML = stravTotal;
		    strav2022Out.innerHTML = strav2022;
		    strav2021Out.innerHTML = strav2021;
		    strav2020Out.innerHTML = strav2020;
		}
	    }

	    let fenwindTotal = 0;
	    let fenwind2022 = 0;
	    let fenwind2021 = 0;
	    let fenwind2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "fenwickwindfarm") {
		    fenwindTotal = fenwindTotal + 1;
		    fenwindTotalOut.innerHTML = fenwindTotal;
		    if (events.roadies[i].year === "2022") {
			fenwind2022 = fenwind2022 + 1;
			fenwind2022Out.innerHTML = fenwind2022;
		    }
		    if (events.roadies[i].year === "2021") {
			fenwind2021 = fenwind2021 + 1;
			fenwind2021Out.innerHTML = fenwind2021;
		    }
		    if (events.roadies[i].year === "2020") {
			fenwind2020 = fenwind2020 + 1;
			fenwind2020Out.innerHTML = fenwind2020;
		    }
		} else {
		    fenwindTotal = fenwindTotal;
		    fenwind2022 = fenwind2022;
		    fenwind2021 = fenwind2021;
		    fenwind2020 = fenwind2020;
		    fenwindTotalOut.innerHTML = fenwindTotal;
		    fenwind2022Out.innerHTML = fenwind2022;
	            fenwind2021Out.innerHTML = fenwind2021;
		    fenwind2020Out.innerHTML = fenwind2020;
		}
	    }

	    let fenTotal = 0;
	    let fen2022 = 0;
	    let fen2021 = 0;
	    let fen2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "fenwick") {
		    fenTotal = fenTotal + 1;
		    fenTotalOut.innerHTML = fenTotal;
		    if (events.roadies[i].year === "2022") {
			fen2022 = fen2022 + 1;
			fen2022Out.innerHTML = fen2022;
		    }
		    if (events.roadies[i].year === "2021") {
			fen2021 = fen2021 + 1;
			fen2021Out.innerHTML = fen2021;
		    }
		    if (events.roadies[i].year === "2020") {
			fen2020 = fen2020 + 1;
			fen2020Out.innerHTML = fen2020;
		    }
		} else {
		    fenTotal = fenTotal;
		    fen2022 = fen2022;
		    fen2021 = fen2021;
		    fen2020 = fen2020;
  		    fenTotalOut.innerHTML = fenTotal;
		    fen2022Out.innerHTML = fen2022;
		    fen2021Out.innerHTML = fen2021;
		    fen2020Out.innerHTML = fen2020;
		}
	    }

	    let windTotal = 0;
	    let wind2022 = 0;
	    let wind2021 = 0;
	    let wind2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "windfarm") {
		    windTotal = windTotal + 1;
		    windTotalOut.innerHTML = windTotal;
		    if (events.roadies[i].year === "2022") {
			wind2022 = wind2022 + 1;
			wind2022Out.innerHTML = wind2022;
		    }
		    if (events.roadies[i].year === "2021") {
			wind2021 = wind2021 + 1;
			wind2021Out.innerHTML = wind2021;
		    }
		    if (events.roadies[i].year === "2020") {
			wind2020 = wind2020 + 1;
			wind2020Out.innerHTML = wind2020;
		    }
		} else {
		    windTotal = windTotal;
		    wind2022 = wind2022;
		    wind2021 = wind2021;
		    wind2020 = wind2020;
		    windTotalOut.innerHTML = windTotal;
		    wind2022Out.innerHTML = wind2022;
		    wind2021Out.innerHTML = wind2021;
		    wind2020Out.innerHTML = wind2020;
		}
	    }

	    let thallTotal = 0;
	    let thall2022 = 0;
	    let thall2021 = 0;
	    let thall2020 = 0;

	    for (var i in events.roadies) {
		if (events.roadies[i].route === "thorntonhall") {
		    thallTotal = thallTotal + 1;
		    thallTotalOut.innerHTML = thallTotal;
		    if (events.roadies[i].year === "2022") {
			thall2022 = thall2022 + 1;
			thall2022Out.innerHTML = thall2022;
		    }
		    if (events.roadies[i].year === "2021") {
			thall2021 = thall2021 + 1;
			thall2021Out.innerHTML = thall2021;
		    }
		    if (events.roadies[i].year === "2020") {
			thall2020 = thall2020 + 1;
			thall2020Out.innerHTML = thall2020;
		    }
		} else {
		    thallTotal = thallTotal;
		    thall2022 = thall2022;
		    thall2021 = thall2021;
		    thall2020 = thall2020;
		    thallTotalOut.innerHTML = thallTotal;
		    thall2022Out.innerHTML = thall2022;
		    thall2021Out.innerHTML = thall2021;
		    thall2020Out.innerHTML = thall2020;
		}
	    }
	    */
	})
}

setHike();
