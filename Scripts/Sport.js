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

	    let longestRideOut = document.getElementById("longestRide");
	    let highestRideOut = document.getElementById("highestRide");

	    /*
	     * Number of Ranking Points
	     */
	    let ptsTotal = 0;
	    let pts2022 = 0;
	    let pts2021 = 0;
	    let pts2020 = 0;

	    //...
	    
	    /*
	     * Number of Rides
	     */
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

	    /*
	     * Distance Covered
	     */
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

	    /*
	     * Elevation Gained
	     */
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

	    /*
	     * Number of Centuries
	     */
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

	    /*
	     * Number of Srathavens
	     */
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

	    /*
	     * Number of Fenwick / Wind Farms
	     */
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

	    /*
	     * Number of Fenwicks
	     */
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

	    /*
	     * Number of Wind Farms
	     */
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

	    /*
	     * Number of Thorntonhalls
	     */
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

            /*
	     * Longest and Most Climbed Ride
	     */
	    let distances = [];
	    let elevations = [];

	    for (var i in events.roadies) {
		distances.push(events.roadies[i].dist);
		elevations.push(events.roadies[i].elev);
	    }

	    longestRideOut.innerHTML = Math.max(... distances).toLocaleString("en-US") + "mi";
	    highestRideOut.innerHTML = Math.max(... elevations).toLocaleString("en-US") + "ft";
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

	    let corbettsTotalOut = document.getElementById("corbettsTotal");
	    let corbetts2022Out = document.getElementById("corbetts2022");
	    let corbetts2021Out = document.getElementById("corbetts2021");
	    let corbetts2020Out = document.getElementById("corbetts2020");

	    let corbettTopsTotalOut = document.getElementById("corbettTopsTotal");
	    let corbettTops2022Out = document.getElementById("corbettTops2022");
	    let corbettTops2021Out = document.getElementById("corbettTops2021");
	    let corbettTops2020Out = document.getElementById("corbettTops2020");

	    let grahamsTotalOut = document.getElementById("grahamsTotal");
	    let grahams2022Out = document.getElementById("grahams2022");
	    let grahams2021Out = document.getElementById("grahams2021");
	    let grahams2020Out = document.getElementById("grahams2020");

	    let subTwosTotalOut = document.getElementById("subTwosTotal");
	    let subTwos2022Out = document.getElementById("subTwos2022");
	    let subTwos2021Out = document.getElementById("subTwos2021");
	    let subTwos2020Out = document.getElementById("subTwos2020");

	    let longestHikeOut = document.getElementById("longestHike");
	    let highestHikeOut = document.getElementById("highestHike");

	    /*
	     * Number of Hikes
	     */
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
	
            /*
	     * Distance Covered
	     */
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

	    /*
	     * Elevation Gained
	     */
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
	     * Number of Islands
	     */
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

	    /*
	     * Number of Munros
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

	    /*
	     * Number of Munro Tops
	     */
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

	    /*
	     * Number of Corbetts
	     */
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
	     * Number of Corbett Tops
	     */
	    let corbettTopsTotalCol = [];
	    let corbettTops2022Col = [];
	    let corbettTops2021Col = [];
	    let corbettTops2020Col = [];

	    let corbettTopsTotalColUnq = [];
	    let corbettTops2022ColUnq = [];
	    let corbettTops2021ColUnq = [];
	    let corbettTops2020ColUnq = [];

	    let corbettTopsTotal = 0;
	    let corbettTops2022 = 0;
	    let corbettTops2021 = 0;
	    let corbettTops2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].corbettTops) {
			corbettTopsTotalCol.push(events.hikes[i].corbettTops[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].corbettTops) {
			    corbettTopsTotalCol.push(events.hikes[i].subHike[k].corbettTops[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].corbettTops) {
			corbettTopsTotalCol.push(events.hikes[i].corbettTops[k])
		    }
		}
		corbettTopsTotalColUnq = [...new Set(corbettTopsTotalCol.sort())];
		corbettTopsTotal = corbettTopsTotalColUnq.length;
		corbettTopsTotalOut.innerHTML = corbettTopsTotal;
		//corbettTopsTotalOut.innerHTML = corbettTopsTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2022Col.push(events.hikes[i].corbettTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbettTops) {
			        corbettTops2022Col.push(events.hikes[i].subHike[k].corbettTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2022Col.push(events.hikes[i].corbettTops[k])
		        }
		    }
		    corbettTops2022ColUnq = [...new Set(corbettTops2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2021Col.push(events.hikes[i].corbettTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbettTops) {
			        corbettTops2021Col.push(events.hikes[i].subHike[k].corbettTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2021Col.push(events.hikes[i].corbettTops[k])
		        }
		    }
		    corbettTops2021ColUnq = [...new Set(corbettTops2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2020Col.push(events.hikes[i].corbettTops[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].corbettTops) {
			        corbettTops2020Col.push(events.hikes[i].subHike[k].corbettTops[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].corbettTops) {
			    corbettTops2020Col.push(events.hikes[i].corbettTops[k])
		        }
		    }
		    corbettTops2020ColUnq = [...new Set(corbettTops2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in corbettTops2022ColUnq) {
		    for (var y in corbettTops2021ColUnq) {
			if (corbettTops2022ColUnq[x] === corbettTops2021ColUnq[y]) {
			    corbettTops2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in corbettTops2020ColUnq) {
			if (corbettTops2022ColUnq[x] === corbettTops2020ColUnq[y]) {
			    corbettTops2022ColUnq.splice(x, 1);
			}
		    }
		}
		corbettTops2022 = corbettTops2022ColUnq.length;
		corbettTops2022Out.innerHTML = corbettTops2022;
		//corbettTops2022Out.innerHTML = corbettTops2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in corbettTops2021ColUnq) {
		    for (var y in corbettTops2020ColUnq) {
			if (corbettTops2021ColUnq[x] === corbettTops2020ColUnq[y]) {
			    corbettTops2021ColUnq.splice(x, 1);
			}
		    }
		}
		corbettTops2021 = corbettTops2021ColUnq.length;
		corbettTops2021Out.innerHTML = corbettTops2021;
		//corbettTops2021Out.innerHTML = corbettTops2021ColUnq.join("<br>");
		
		corbettTops2020 = corbettTops2020ColUnq.length;
		corbettTops2020Out.innerHTML = corbettTops2020;
		//corbettTops2020Out.innerHTML = corbettTops2020ColUnq.join("<br>");
	    }

	    /*
	     * Number of Grahams
	     */
	    let grahamsTotalCol = [];
	    let grahams2022Col = [];
	    let grahams2021Col = [];
	    let grahams2020Col = [];

	    let grahamsTotalColUnq = [];
	    let grahams2022ColUnq = [];
	    let grahams2021ColUnq = [];
	    let grahams2020ColUnq = [];

	    let grahamsTotal = 0;
	    let grahams2022 = 0;
	    let grahams2021 = 0;
	    let grahams2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].grahams) {
			grahamsTotalCol.push(events.hikes[i].grahams[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].grahams) {
			    grahamsTotalCol.push(events.hikes[i].subHike[k].grahams[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].grahams) {
			grahamsTotalCol.push(events.hikes[i].grahams[k])
		    }
		}
		grahamsTotalColUnq = [...new Set(grahamsTotalCol.sort())];
		grahamsTotal = grahamsTotalColUnq.length;
		grahamsTotalOut.innerHTML = grahamsTotal;
		//grahamsTotalOut.innerHTML = grahamsTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].grahams) {
			    grahams2022Col.push(events.hikes[i].grahams[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].grahams) {
			        grahams2022Col.push(events.hikes[i].subHike[k].grahams[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].grahams) {
			    grahams2022Col.push(events.hikes[i].grahams[k])
		        }
		    }
		    grahams2022ColUnq = [...new Set(grahams2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].grahams) {
			    grahams2021Col.push(events.hikes[i].grahams[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].grahams) {
			        grahams2021Col.push(events.hikes[i].subHike[k].grahams[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].grahams) {
			    grahams2021Col.push(events.hikes[i].grahams[k])
		        }
		    }
		    grahams2021ColUnq = [...new Set(grahams2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].grahams) {
			    grahams2020Col.push(events.hikes[i].grahams[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].grahams) {
			        grahams2020Col.push(events.hikes[i].subHike[k].grahams[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].grahams) {
			    grahams2020Col.push(events.hikes[i].grahams[k])
		        }
		    }
		    grahams2020ColUnq = [...new Set(grahams2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in grahams2022ColUnq) {
		    for (var y in grahams2021ColUnq) {
			if (grahams2022ColUnq[x] === grahams2021ColUnq[y]) {
			    grahams2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in grahams2020ColUnq) {
			if (grahams2022ColUnq[x] === grahams2020ColUnq[y]) {
			    grahams2022ColUnq.splice(x, 1);
			}
		    }
		}
		grahams2022 = grahams2022ColUnq.length;
		grahams2022Out.innerHTML = grahams2022;
		//grahams2022Out.innerHTML = grahams2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in grahams2021ColUnq) {
		    for (var y in grahams2020ColUnq) {
			if (grahams2021ColUnq[x] === grahams2020ColUnq[y]) {
			    grahams2021ColUnq.splice(x, 1);
			}
		    }
		}
		grahams2021 = grahams2021ColUnq.length;
		grahams2021Out.innerHTML = grahams2021;
		//grahams2021Out.innerHTML = grahams2021ColUnq.join("<br>");
		
		grahams2020 = grahams2020ColUnq.length;
		grahams2020Out.innerHTML = grahams2020;
		//grahams2020Out.innerHTML = grahams2020ColUnq.join("<br>");
	    }

	    /*
	     * Number of Sub2000s 
	     */
	    let subTwosTotalCol = [];
	    let subTwos2022Col = [];
	    let subTwos2021Col = [];
	    let subTwos2020Col = [];

	    let subTwosTotalColUnq = [];
	    let subTwos2022ColUnq = [];
	    let subTwos2021ColUnq = [];
	    let subTwos2020ColUnq = [];

	    let subTwosTotal = 0;
	    let subTwos2022 = 0;
	    let subTwos2021 = 0;
	    let subTwos2020 = 0;

	    for (var i in events.hikes) {
		if (events.hikes[i].subHike != null) {
		    for (var k in events.hikes[i].subTwos) {
			subTwosTotalCol.push(events.hikes[i].subTwos[k])
		    }
		    for (var k in events.hikes[i].subHike) {
			for (var l in events.hikes[i].subHike[k].subTwos) {
			    subTwosTotalCol.push(events.hikes[i].subHike[k].subTwos[l])
			}
		    }
		} else {
		    for (var k in events.hikes[i].subTwos) {
			subTwosTotalCol.push(events.hikes[i].subTwos[k])
		    }
		}
		subTwosTotalColUnq = [...new Set(subTwosTotalCol.sort())];
		subTwosTotal = subTwosTotalColUnq.length;
		subTwosTotalOut.innerHTML = subTwosTotal;
		//subTwosTotalOut.innerHTML = subTwosTotalColUnq.join("<br>");

		if (events.hikes[i].year === "2022") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2022Col.push(events.hikes[i].subTwos[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].subTwos) {
			        subTwos2022Col.push(events.hikes[i].subHike[k].subTwos[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2022Col.push(events.hikes[i].subTwos[k])
		        }
		    }
		    subTwos2022ColUnq = [...new Set(subTwos2022Col.sort())];
		}

		if (events.hikes[i].year === "2021") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2021Col.push(events.hikes[i].subTwos[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].subTwos) {
			        subTwos2021Col.push(events.hikes[i].subHike[k].subTwos[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2021Col.push(events.hikes[i].subTwos[k])
		        }
		    }
		    subTwos2021ColUnq = [...new Set(subTwos2021Col.sort())];
		}

		if (events.hikes[i].year === "2020") {
		    if (events.hikes[i].subHike != null) {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2020Col.push(events.hikes[i].subTwos[k])
		        }
		        for (var k in events.hikes[i].subHike) {
			    for (var l in events.hikes[i].subHike[k].subTwos) {
			        subTwos2020Col.push(events.hikes[i].subHike[k].subTwos[l])
			    }
		        }
		    } else {
		        for (var k in events.hikes[i].subTwos) {
			    subTwos2020Col.push(events.hikes[i].subTwos[k])
		        }
		    }
		    subTwos2020ColUnq = [...new Set(subTwos2020Col.sort())];
		}

		// Omit Repetitions from Previous Years
		// 2022 Compared to: 2021, 2020
		for (var x in subTwos2022ColUnq) {
		    for (var y in subTwos2021ColUnq) {
			if (subTwos2022ColUnq[x] === subTwos2021ColUnq[y]) {
			    subTwos2022ColUnq.splice(x, 1);
			}
		    }
		    for (var y in subTwos2020ColUnq) {
			if (subTwos2022ColUnq[x] === subTwos2020ColUnq[y]) {
			    subTwos2022ColUnq.splice(x, 1);
			}
		    }
		}
		subTwos2022 = subTwos2022ColUnq.length;
		subTwos2022Out.innerHTML = subTwos2022;
		//subTwos2022Out.innerHTML = subTwos2022ColUnq.join("<br>");

		// Omit Repetitions from Previous Years
		// 2021 Compared to: 2021
		for (var x in subTwos2021ColUnq) {
		    for (var y in subTwos2020ColUnq) {
			if (subTwos2021ColUnq[x] === subTwos2020ColUnq[y]) {
			    subTwos2021ColUnq.splice(x, 1);
			}
		    }
		}
		subTwos2021 = subTwos2021ColUnq.length;
		subTwos2021Out.innerHTML = subTwos2021;
		//subTwos2021Out.innerHTML = subTwos2021ColUnq.join("<br>");
		
		subTwos2020 = subTwos2020ColUnq.length;
		subTwos2020Out.innerHTML = subTwos2020;
		//subTwos2020Out.innerHTML = subTwos2020ColUnq.join("<br>");
	    }

            /*
	     * Longest and Most Climbed Hike
	     */
	    let distances = [];
	    let elevations = [];

	    for (var i in events.hikes) {
		distances.push(events.hikes[i].dist);
		elevations.push(events.hikes[i].elev);
		for (var k in events.hikes[i].subHike) {
		    distances.push(events.hikes[i].subHike[k].dist);
		    elevations.push(events.hikes[i].subHike[k].elev);
		}
	    }

	    longestHikeOut.innerHTML = Math.max(... distances).toLocaleString("en-US") + "mi";
	    highestHikeOut.innerHTML = Math.max(... elevations).toLocaleString("en-US") + "ft";
	})
}

setHike();

function setWalk() {
    fetch(events)
        .then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const events = data;

	    let walksTotalOut = document.getElementById("walksTotal");
	    let walks2022Out = document.getElementById("walks2022");
	    let walks2021Out = document.getElementById("walks2021");
	    let walks2020Out = document.getElementById("walks2020");

	    let miTotalWalkOut = document.getElementById("miTotalWalk");
	    let mi2022WalkOut = document.getElementById("mi2022Walk");
	    let mi2021WalkOut = document.getElementById("mi2021Walk");
	    let mi2020WalkOut = document.getElementById("mi2020Walk");

	    let ftTotalWalkOut = document.getElementById("ftTotalWalk");
	    let ft2022WalkOut = document.getElementById("ft2022Walk");
	    let ft2021WalkOut = document.getElementById("ft2021Walk");
	    let ft2020WalkOut = document.getElementById("ft2020Walk");

	    let thallTotalOut = document.getElementById("thallTotalWalk");
	    let thall2022Out = document.getElementById("thall2022Walk");
	    let thall2021Out = document.getElementById("thall2021Walk");
	    let thall2020Out = document.getElementById("thall2020Walk");

	    let footTotalOut = document.getElementById("footTotal");
	    let foot2022Out = document.getElementById("foot2022");
	    let foot2021Out = document.getElementById("foot2021");
	    let foot2020Out = document.getElementById("foot2020");

	    let longestWalkOut = document.getElementById("longestWalk");

	    /*
	     * Number of Walks
	     */
	    let walksTotal = events.walks.length;
	    let walks2022 = 0;
	    let walks2021 = 0;
	    let walks2020 = 0;

	    walksTotalOut.innerHTML = walksTotal;

	    for (var i in events.walks) {
	        if (events.walks[i].year === "2022") {
		    walks2022 = walks2022 + 1;
		    walks2022Out.innerHTML = walks2022;
		}
	        if (events.walks[i].year === "2021") {
		    walks2021 = walks2021 + 1;
		    walks2021Out.innerHTML = walks2021;
		}
	        if (events.walks[i].year === "2020") {
		    walks2020 = walks2020 + 1;
		    walks2020Out.innerHTML = walks2020;
		}
	    }
	
	    /*
	     * Distance Covered
	     */
	    let miTotalWalk = 0;
	    let mi2022Walk = 0;
	    let mi2021Walk = 0;
	    let mi2020Walk = 0;

	    for (var i in events.walks) {
		miTotalWalk = miTotalWalk + events.walks[i].dist;
		miTotalWalkOut.innerHTML = miTotalWalk.toLocaleString("en-US") + "mi";
		if (events.walks[i].year === "2022") {
		    mi2022Walk = mi2022Walk + events.walks[i].dist;
		    mi2022WalkOut.innerHTML = mi2022Walk.toLocaleString("en-US") + "mi";
		}
		if (events.walks[i].year === "2021") {
		    mi2021Walk = mi2021Walk + events.walks[i].dist;
		    mi2021WalkOut.innerHTML = mi2021Walk.toLocaleString("en-US") + "mi";
		}
		if (events.walks[i].year === "2020") {
		    mi2020Walk = mi2020Walk + events.walks[i].dist;
		    mi2020WalkOut.innerHTML = mi2020Walk.toLocaleString("en-US") + "mi";
		}
	    }

	    /*
	     * Elevation Gained
	     */
	    let ftTotalWalk = 0;
	    let ft2022Walk = 0;
	    let ft2021Walk = 0;
	    let ft2020Walk = 0;

	    for (var i in events.walks) {
		ftTotalWalk = ftTotalWalk + events.walks[i].elev;
		ftTotalWalkOut.innerHTML = ftTotalWalk.toLocaleString("en-US") + "ft";
		if (events.walks[i].year === "2022") {
		    ft2022Walk = ft2022Walk + events.walks[i].elev;
		    ft2022WalkOut.innerHTML = ft2022Walk.toLocaleString("en-US") + "ft";
		}
		if (events.walks[i].year === "2021") {
		    ft2021Walk = ft2021Walk + events.walks[i].elev;
		    ft2021WalkOut.innerHTML = ft2021Walk.toLocaleString("en-US") + "ft";
		}
		if (events.walks[i].year === "2020") {
		    ft2020Walk = ft2020Walk + events.walks[i].elev;
		    ft2020WalkOut.innerHTML = ft2020Walk.toLocaleString("en-US") + "ft";
		}
	    }

	    /*
	     * Number of Thorntonhalls
	     */
	    let thallTotal = 0;
	    let thall2022 = 0;
	    let thall2021 = 0;
	    let thall2020 = 0;

	    for (var i in events.walks) {
		if (events.walks[i].route === "thorntonhall") {
		    thallTotal = thallTotal + 1;
		    thallTotalOut.innerHTML = thallTotal;
		    if (events.walks[i].year === "2022") {
			thall2022 = thall2022 + 1;
			thall2022Out.innerHTML = thall2022;
		    }
		    if (events.walks[i].year === "2021") {
			thall2021 = thall2021 + 1;
			thall2021Out.innerHTML = thall2021;
		    }
		    if (events.walks[i].year === "2020") {
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

	    /*
	     * Number of Waterfoots
	     */
	    let footTotal = 0;
	    let foot2022 = 0;
	    let foot2021 = 0;
	    let foot2020 = 0;

	    for (var i in events.walks) {
		if (events.walks[i].route === "waterfoot") {
		    footTotal = footTotal + 1;
		    footTotalOut.innerHTML = footTotal;
		    if (events.walks[i].year === "2022") {
			foot2022 = foot2022 + 1;
			foot2022Out.innerHTML = foot2022;
		    }
		    if (events.walks[i].year === "2021") {
			foot2021 = foot2021 + 1;
			foot2021Out.innerHTML = foot2021;
		    }
		    if (events.walks[i].year === "2020") {
			foot2020 = foot2020 + 1;
			foot2020Out.innerHTML = foot2020;
		    }
		} else {
		    footTotal = footTotal;
		    foot2022 = foot2022;
		    foot2021 = foot2021;
		    foot2020 = foot2020;
		    footTotalOut.innerHTML = footTotal;
		    foot2022Out.innerHTML = foot2022;
		    foot2021Out.innerHTML = foot2021;
		    foot2020Out.innerHTML = foot2020;
		}
	    }

            /*
	     * Longest Walk
	     */
	    let distances = [];

	    for (var i in events.walks) {
		distances.push(events.walks[i].dist);
	    }

	    longestWalkOut.innerHTML = Math.max(... distances).toLocaleString("en-US") + "mi";
	})
}

setWalk();
