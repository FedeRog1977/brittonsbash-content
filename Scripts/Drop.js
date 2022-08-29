document.addEventListener("DOMContentLoaded", () => {
    const pages = document.getElementById("pagesDropCont");
    const social = document.getElementById("socialDropCont");
    const blog = document.getElementById("blogDropCont");

    document.getElementById("blogDrop").addEventListener("click", e => {
        e.preventDefault();
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden");
        } else {
	    blog.classList.add("hidden");
	}
    });

    document.getElementById("blogDropMobile").addEventListener("click", e => {
        e.preventDefault();
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden");
        } else {
	    blog.classList.add("hidden");
	}
    });

    document.getElementById("pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("hidden")) {
            pages.classList.remove("hidden");
        } else {
	    pages.classList.add("hidden");
	}
    });

    document.getElementById("socialDrop").addEventListener("click", e => {
        e.preventDefault();
        if (social.classList.contains("hidden")) {
            social.classList.remove("hidden");
        } else {
	    social.classList.add("hidden");
	}
    });
});
