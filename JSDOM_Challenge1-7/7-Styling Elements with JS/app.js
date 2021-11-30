
const image = document.getElementById("cat");

const button = document.getElementById("submit");

button.addEventListener("click", ()=> {

    if (image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        image.style.display = "none";
        button.textContent = "show";
    }
})

// the style is added to the html directly.


    // javascript function
    // CSS but with inverted commas for some reason.