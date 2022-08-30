let test = document.getElementById("test");
test.innerHTML = "Hello";

function setRoadie() {
    fetch(events)
        .then((resp) => {
	    return resp.json();
	})
	.then((data) => {
	    const events = data;
	    let ptsTotal = document.getElementById("ptsTotal");
	    let pts2022 = document.getElementById("pts2022");
	    let pts2021 = document.getElementById("pts2021");
	    let pts2020 = document.getElementById("pts2020");
	    ptsTotal.innerHTML = "Cheers";
	})
}

setRoadie();
