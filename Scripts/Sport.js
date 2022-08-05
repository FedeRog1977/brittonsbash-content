let activities = "https://raw.githubusercontent.com/FedeRog1977/BrittonsBashRC/master/JSON/Sport.json";

function setRoadie() {
    fetch(activities)
	.then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const roadie = data.roadie;
	    let ptsTotal = document.getElementById("ptsTotal");
	    let pts2022 = document.getElementById("pts2022");
	    let pts2021 = document.getElementById("pts2021");
	    let pts2020 = document.getElementById("pts2020");
	    ptsTotal.value = roadie[0].time;
	)}
}

setRoadie();
