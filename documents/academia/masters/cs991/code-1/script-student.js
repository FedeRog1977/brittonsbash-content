// Choosing Page Content

document.addEventListener("DOMContentLoaded", () => {
    const claimsList = document.querySelector("#claimsList");
    const newClaim = document.querySelector("#newClaim");
    const claimEdit = document.getElementById("claimEditDummy");

    document.querySelector("#claimsListOpt").addEventListener("click", e => {
        e.preventDefault();
        if (claimsList.classList.contains("hidden")) {
            claimsList.classList.remove("hidden");
        }
        newClaim.classList.add("hidden");
        claimEdit.classList.add("hidden");
    });

    document.querySelector("#newClaimOpt").addEventListener("click", e => {
        e.preventDefault();
        if (newClaim.classList.contains("hidden")) {
            newClaim.classList.remove("hidden");
        }
        claimsList.classList.add("hidden");
        claimEdit.classList.add("hidden");
    });

});

// Delete & Edit Claims

document.addEventListener("DOMContentLoaded", () => {
    const claimsList = document.getElementById("claimsList");
    const claimDelete = document.getElementById("claimDeleteDummy");
    const claimEdit = document.getElementById("claimEditDummy");

    document.querySelector("#deleteClaim").addEventListener("click", e => {
        e.preventDefault();
        claimDelete.classList.add("hidden");
    });

    document.querySelector("#editClaim").addEventListener("click", e => {
        e.preventDefault();
        claimEdit.classList.remove("hidden");
        claimsList.classList.add("hidden");
    });

});
