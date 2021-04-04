/** @format */

// Selectors
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

// Functions
const scrollToTop = () => {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// EventListener
scrollToTopBtn.addEventListener("click", scrollToTop);
