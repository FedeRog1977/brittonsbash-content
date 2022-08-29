document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelector("#pagesDropCont");
    const social = document.querySelector("#socialDropCont");
    const blog = document.querySelector("#blogDropCont");

    document.querySelector("#blogDrop").addEventListener("click", e => {
        e.preventDefault();
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden");
        } else {
	    blog.classList.add("hidden");
	}
    });

    document.querySelector("#blogDropMobile").addEventListener("click", e => {
        e.preventDefault();
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden");
        } else {
	    blog.classList.add("hidden");
	}
    });

    document.querySelector("#pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("hidden")) {
            pages.classList.remove("hidden");
        } else {
	    pages.classList.add("hidden");
	}
    });

    document.querySelector("#socialDrop").addEventListener("click", e => {
        e.preventDefault();
        if (social.classList.contains("hidden")) {
            social.classList.remove("hidden");
        } else {
	    social.classList.add("hidden");
	}
    });
});
