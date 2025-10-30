// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>({
    anchor.addEventListener("click", function(e)) {
        e.preventDefault();
        const targetId=this.getAttribute("href");

        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"  //Enables smooth scrolling
        });
    });
});

//Console message for testing
console.log("Welcome to Tomi Leyla Kevine's Portfolio website");

//automatically insert the current year in the footer
const currentYear=newDate().getFullYear();// This is to gt the current year, 2025
document.getElementById("year").textContent=currentYear