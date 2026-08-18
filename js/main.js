// ==============
// FIle: js/main.js
// Vintage Barbershop Project
// ==============
// ----- DOM Elements -----
const yearE1 = document.getElementById("year")
const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const ctaBtn = document.getElementById("ctaBtn")
const callBtb = document.getElementById("callBtn")
const phonelink = document.getElementById("phonelink")
const heading = document.getElementById ("heroHeading")

// ----- Helpers / Functions ----
// Update Footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    yearE1.textContent = now.getFullYear();
};

// Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMObileMenu = () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

// Close Mobile Menu (used when a link is clicked)
const closeMobileMenu = () => {
if (!mobileMenu) retruns;
mobileMenu.classList.remove("is-open");
isMenuOpen =false;
};

// Reusable function with parameter (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

// ----- Event Listeners -----
// 1) set year on page load
setCurrentYear();

// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMObileMenu();
    });
}

// 3) Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        // if they clicked an <a> inside the menu, close it
        if (event.target.tagName === "A") { //event represents the what was triggered, target is what was triggered, tagName is the element that will be
            closeMobileMenu();
        }
    });
}

// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}

// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // if you later set phoneLink href to tell:; tis will work perfectly.
        // For now, this is a beginner-friendly placeholder.
        if (phoneLink) {
            updateHeadingText("call us at " + phonelink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    })
}