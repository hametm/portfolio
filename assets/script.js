const homeLink = document.getElementById("home-link");
const aboutMeLink = document.getElementById("about-me-link");
const workLink =  document.getElementById("work-link");
const contactLink =  document.getElementById("contact-link");

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


homeObserver.observe(document.querySelector(".home"));
sectionObserver.observe(document.querySelector("#about-me-header"));
sectionObserver.observe(document.querySelector("#work-header"));
sectionObserver.observe(document.querySelector("#contact-header"));


// const aboutMeObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             aboutMeLink.classList.add("selected");
//         } else {
//             aboutMeLink.classList.remove("selected");
//         }
//     });
// });

// const workObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             workLink.classList.add("selected");
//         } else {
//             workLink.classList.remove("selected");
//         }
//     });
// });

// const contactObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             contactLink.classList.add("selected");
//         } else {
//             contactLink.classList.remove("selected");
//         }
//     });
// });


