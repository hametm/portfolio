const homeLink = document.getElementById("home-link");
const aboutMeLink = document.getElementById("about-me-link");
const workLink =  document.getElementById("work-link");
const contactLink =  document.getElementById("contact-link");
const links = document.querySelectorAll(".link");

const homeHeader = document.getElementById("hi");
const aboutMeHeader = document.getElementById("about-me-header");
const workHeader = document.getElementById("work-header");
const contactHeader = document.getElementById("contact-header");


// Clicking the nav links

const homeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("home-animation");
            homeLink.classList.add("selected");
        } else {
            homeLink.classList.remove("selected");
        }
    });
});

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section-animation");
        }
    });
});

homeObserver.observe(homeHeader);
sectionObserver.observe(aboutMeHeader);
sectionObserver.observe(workHeader);
sectionObserver.observe(contactHeader);

// Adding styles to the current link

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => {
            link.classList.remove("selected-link");
        });
        link.classList.add("selected-link");
    });
});


