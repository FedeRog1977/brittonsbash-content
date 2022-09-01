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

	    let munroTopsTotalOut = document.getElementById("munroTopsTotal");
	    let munroTops2022Out = document.getElementById("munroTops2022");
	    let munroTops2021Out = document.getElementById("munroTops2021");
	    let munroTops2020Out = document.getElementById("munroTops2020");

	    let corbettsTotalOut = document.getElementById("corbsTotal");
	    let corbetts2022Out = document.getElementById("corbs2022");
	    let corbetts2021Out = document.getElementById("corbs2021");
	    let corbetts2020Out = document.getElementById("corbs2020");

	    let corbTopsTotalOut = document.getElementById("corbTopsTotal");
	    let corbTops2022Out = document.getElementById("corbTops2022");
	    let corbTops2021Out = document.getElementById("corbTops2021");
	    let corbTops2020Out = document.getElementById("corbTops2020");

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

	    /*
	    let islandsTotalCol = [];
	    let islands2022Col = [];
	    let islands2021Col = [];
	    let islands2020Col = [];

	    let islandsTotalColUnq = [];
	    let islands2022ColUnq = [];
	    let islands2021ColUnq = [];
	    let islands2020ColUnq = [];

	    let islandsTotal = 0;
	    let islands2022 = 0;
	    let islands2021 = 0;
	    let islands2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].islands) {
			islandsTotalCol.push(events.hikes[i].islands[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].islands) {
			    islandsTotalCol.push(events.hikes[i].subHike[k].islands[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].islands) {
			islandsTotalCol.push(events.hikes[i].islands[k])
		    }
		}
		islandTotalColUnq = [...new Set(islandsTotalCol.sort())];
		islandsTotal = islandsTotalColUnq.length;
		islandsTotalOut.innerHTML = islandsTotal;
		//islandsTotalOut.innerHTML = islandsTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].islands) {
			    islands2022Col.push(events.hikes[i].islands[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].islands) {
			        islands2022Col.push(events.hikes[i].subHike[k].islands[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].islands) {
			    islands2022Col.push(events.hikes[i].islands[k])
		        }
		    }
		    islands2022ColUnq = [...new Set(islands2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].islands) {
			    islands2021Col.push(events.hikes[i].islands[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].islands) {
			        islands2021Col.push(events.hikes[i].subHike[k].islands[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].islands) {
			    islands2021Col.push(events.hikes[i].islands[k])
		        }
		    }
		    islands2021ColUnq = [...new Set(islands2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].islands) {
			    islands2020Col.push(events.hikes[i].islands[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].islands) {
			        islands2020Col.push(events.hikes[i].subHike[k].islands[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].islands) {
			    islands2020Col.push(events.hikes[i].islands[k])
		        }
		    }
		    islands2020ColUnq = [...new Set(islands2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in islands2022ColUnq) {
		    for (var y in islands2021ColUnq) {
			if (islands2022ColUnq[x] === islands2021ColUnq[y]) {
			    islands2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in islands2020ColUnq) {
			if (islands2022ColUnq[x] === islands2020ColUnq[y]) {
			    islands2022ColUnq.splice(x, 1);
			}
		    }
		}
		island2022 = islands2022ColUnq.length;
		islands2022Out.innerHTML = islands2022;
		//islands2022Out.innerHTML = islands2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in islands2021ColUnq) {
		    for (var y in islands2020ColUnq) {
			if (islands2021ColUnq[x] === islands2020ColUnq[y]) {
			    islands2021ColUnq.splice(x, 1);
			}
		    }
		}
		islands2021 = islands2021ColUnq.length;
		islands2021Out.innerHTML = islands2021;
		//islands2021Out.innerHTML = islands2021ColUnq.join("<br>");
		
		islands2020 = islands2020ColUnq.length;
		islands2020Out.innerHTML = islands2020;
		//islands2020Out.innerHTML = islands2020ColUnq.join("<br>");
	    }
	    */

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
		munrosTotalOut.innerHTML = munrosTotal;
		//munrosTotalOut.innerHTML = munrosTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2022Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2022ColUnq = [...new Set(munros2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2021Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2021ColUnq = [...new Set(munros2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2020Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2020ColUnq = [...new Set(munros2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in munros2022ColUnq) {
		    for (var y in munros2021ColUnq) {
			if (munros2022ColUnq[x] === munros2021ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in munros2020ColUnq) {
			if (munros2022ColUnq[x] === munros2020ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		}
		munros2022 = munros2022ColUnq.length;
		munros2022Out.innerHTML = munros2022;
		//munros2022Out.innerHTML = munros2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in munros2021ColUnq) {
		    for (var y in munros2020ColUnq) {
			if (munros2021ColUnq[x] === munros2020ColUnq[y]) {
			    munros2021ColUnq.splice(x, 1);
			}
		    }
		}
		munros2021 = munros2021ColUnq.length;
		munros2021Out.innerHTML = munros2021;
		//munros2021Out.innerHTML = munros2021ColUnq.join("<br>");
		
		munros2020 = munros2020ColUnq.length;
		munros2020Out.innerHTML = munros2020;
		//munros2020Out.innerHTML = munros2020ColUnq.join("<br>");
	    }

	    let munroTopsTotalCol = [];
	    let munroTops2022Col = [];
	    let munroTops2021Col = [];
	    let munroTops2020Col = [];

	    let munroTopsTotalColUnq = [];
	    let munroTops2022ColUnq = [];
	    let munroTops2021ColUnq = [];
	    let munroTops2020ColUnq = [];

	    let munroTopsTotal = 0;
	    let munroTops2022 = 0;
	    let munroTops2021 = 0;
	    let munroTops2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].munroTops) {
			munroTopsTotalCol.push(events.hikes[i].munroTops[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].munroTops) {
			    munroTopsTotalCol.push(events.hikes[i].subHike[k].munroTops[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].munroTops) {
			munroTopsTotalCol.push(events.hikes[i].munroTops[k])
		    }
		}
		munroTopsTotalColUnq = [...new Set(munroTopsTotalCol.sort())];
		munroTopsTotal = munroTopsTotalColUnq.length;
		munroTopsTotalOut.innerHTML = munroTopsTotal;
		//munroTopsTotalOut.innerHTML = munroTopsTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2022Col.push(events.hikes[i].munroTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munroTops) {
			        munroTops2022Col.push(events.hikes[i].subHike[k].munroTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2022Col.push(events.hikes[i].munroTops[k])
		        }
		    }
		    munroTops2022ColUnq = [...new Set(munroTops2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2021Col.push(events.hikes[i].munroTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munroTops) {
			        munroTops2021Col.push(events.hikes[i].subHike[k].munroTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2021Col.push(events.hikes[i].munroTops[k])
		        }
		    }
		    munroTops2021ColUnq = [...new Set(munroTops2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2020Col.push(events.hikes[i].munroTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munroTops) {
			        munroTops2020Col.push(events.hikes[i].subHike[k].munroTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munroTops) {
			    munroTops2020Col.push(events.hikes[i].munroTops[k])
		        }
		    }
		    munroTops2020ColUnq = [...new Set(munroTops2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in munroTops2022ColUnq) {
		    for (var y in munroTops2021ColUnq) {
			if (munroTops2022ColUnq[x] === munroTops2021ColUnq[y]) {
			    munroTops2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in munroTops2020ColUnq) {
			if (munroTops2022ColUnq[x] === munroTops2020ColUnq[y]) {
			    munroTops2022ColUnq.splice(x, 1);
			}
		    }
		}
		munroTops2022 = munroTops2022ColUnq.length;
		munroTops2022Out.innerHTML = munroTops2022;
		//munroTops2022Out.innerHTML = munroTops2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in munroTops2021ColUnq) {
		    for (var y in munroTops2020ColUnq) {
			if (munroTops2021ColUnq[x] === munroTops2020ColUnq[y]) {
			    munroTops2021ColUnq.splice(x, 1);
			}
		    }
		}
		munroTops2021 = munroTops2021ColUnq.length;
		munroTops2021Out.innerHTML = munroTops2021;
		//munroTops2021Out.innerHTML = munroTops2021ColUnq.join("<br>");
		
		munroTops2020 = munroTops2020ColUnq.length;
		munroTops2020Out.innerHTML = munroTops2020;
		//munroTops2020Out.innerHTML = munroTops2020ColUnq.join("<br>");
	    }

	    let corbettsTotalCol = [];
	    let corbetts2022Col = [];
	    let corbetts2021Col = [];
	    let corbetts2020Col = [];

	    let corbettsTotalColUnq = [];
	    let corbetts2022ColUnq = [];
	    let corbetts2021ColUnq = [];
	    let corbetts2020ColUnq = [];

	    let corbettsTotal = 0;
	    let corbetts2022 = 0;
	    let corbetts2021 = 0;
	    let corbetts2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].corbetts) {
			corbettsTotalCol.push(events.hikes[i].corbetts[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].corbetts) {
			    corbettsTotalCol.push(events.hikes[i].subHike[k].corbetts[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].corbetts) {
			corbettsTotalCol.push(events.hikes[i].corbetts[k])
		    }
		}
		corbettsTotalColUnq = [...new Set(corbettsTotalCol.sort())];
		corbettsTotal = corbettsTotalColUnq.length;
		corbettsTotalOut.innerHTML = corbettsTotal;
		//corbettsTotalOut.innerHTML = corbettsTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2022Col.push(events.hikes[i].corbetts[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbetts) {
			        corbetts2022Col.push(events.hikes[i].subHike[k].corbetts[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2022Col.push(events.hikes[i].corbetts[k])
		        }
		    }
		    corbetts2022ColUnq = [...new Set(corbetts2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2021Col.push(events.hikes[i].corbetts[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbetts) {
			        corbetts2021Col.push(events.hikes[i].subHike[k].corbetts[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2021Col.push(events.hikes[i].corbetts[k])
		        }
		    }
		    corbetts2021ColUnq = [...new Set(corbetts2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2020Col.push(events.hikes[i].corbetts[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbetts) {
			        corbetts2020Col.push(events.hikes[i].subHike[k].corbetts[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbetts) {
			    corbetts2020Col.push(events.hikes[i].corbetts[k])
		        }
		    }
		    corbetts2020ColUnq = [...new Set(corbetts2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in corbetts2022ColUnq) {
		    for (var y in corbetts2021ColUnq) {
			if (corbetts2022ColUnq[x] === corbetts2021ColUnq[y]) {
			    corbetts2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in corbetts2020ColUnq) {
			if (corbetts2022ColUnq[x] === corbetts2020ColUnq[y]) {
			    corbetts2022ColUnq.splice(x, 1);
			}
		    }
		}
		corbetts2022 = corbetts2022ColUnq.length;
		corbetts2022Out.innerHTML = corbetts2022;
		//corbetts2022Out.innerHTML = corbetts2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in corbetts2021ColUnq) {
		    for (var y in corbetts2020ColUnq) {
			if (corbetts2021ColUnq[x] === corbetts2020ColUnq[y]) {
			    corbetts2021ColUnq.splice(x, 1);
			}
		    }
		}
		corbetts2021 = corbetts2021ColUnq.length;
		corbetts2021Out.innerHTML = corbetts2021;
		//corbetts2021Out.innerHTML = corbetts2021ColUnq.join("<br>");
		
		corbetts2020 = corbetts2020ColUnq.length;
		corbetts2020Out.innerHTML = corbetts2020;
		//corbetts2020Out.innerHTML = corbetts2020ColUnq.join("<br>");
	    }

	    /*
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
		munrosTotalOut.innerHTML = munrosTotal;
		//munrosTotalOut.innerHTML = munrosTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2022Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2022ColUnq = [...new Set(munros2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2021Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2021ColUnq = [...new Set(munros2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2020Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2020ColUnq = [...new Set(munros2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in munros2022ColUnq) {
		    for (var y in munros2021ColUnq) {
			if (munros2022ColUnq[x] === munros2021ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in munros2020ColUnq) {
			if (munros2022ColUnq[x] === munros2020ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		}
		munros2022 = munros2022ColUnq.length;
		munros2022Out.innerHTML = munros2022;
		//munros2022Out.innerHTML = munros2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in munros2021ColUnq) {
		    for (var y in munros2020ColUnq) {
			if (munros2021ColUnq[x] === munros2020ColUnq[y]) {
			    munros2021ColUnq.splice(x, 1);
			}
		    }
		}
		munros2021 = munros2021ColUnq.length;
		munros2021Out.innerHTML = munros2021;
		//munros2021Out.innerHTML = munros2021ColUnq.join("<br>");
		
		munros2020 = munros2020ColUnq.length;
		munros2020Out.innerHTML = munros2020;
		//munros2020Out.innerHTML = munros2020ColUnq.join("<br>");
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
		munrosTotalOut.innerHTML = munrosTotal;
		//munrosTotalOut.innerHTML = munrosTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2022Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2022Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2022ColUnq = [...new Set(munros2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2021Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2021Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2021ColUnq = [...new Set(munros2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].munros) {
			        munros2020Col.push(events.hikes[i].subHike[k].munros[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].munros) {
			    munros2020Col.push(events.hikes[i].munros[k])
		        }
		    }
		    munros2020ColUnq = [...new Set(munros2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in munros2022ColUnq) {
		    for (var y in munros2021ColUnq) {
			if (munros2022ColUnq[x] === munros2021ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in munros2020ColUnq) {
			if (munros2022ColUnq[x] === munros2020ColUnq[y]) {
			    munros2022ColUnq.splice(x, 1);
			}
		    }
		}
		munros2022 = munros2022ColUnq.length;
		munros2022Out.innerHTML = munros2022;
		//munros2022Out.innerHTML = munros2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in munros2021ColUnq) {
		    for (var y in munros2020ColUnq) {
			if (munros2021ColUnq[x] === munros2020ColUnq[y]) {
			    munros2021ColUnq.splice(x, 1);
			}
		    }
		}
		munros2021 = munros2021ColUnq.length;
		munros2021Out.innerHTML = munros2021;
		//munros2021Out.innerHTML = munros2021ColUnq.join("<br>");
		
		munros2020 = munros2020ColUnq.length;
		munros2020Out.innerHTML = munros2020;
		//munros2020Out.innerHTML = munros2020ColUnq.join("<br>");
	    }
	    */
	})
}

setHike();
