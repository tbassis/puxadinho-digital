// Crafted by Tulio Assis
// This script implements an ResizeObserver of the HTML's body width and height and set the attributes in key children components

let pageBodyWidth;
let pageBodyHeight;

const htmlDocBody = document.querySelector('body');

const navbarComponent = document.querySelector('navbar-component');
const footerComponent = document.querySelector('footer-component');

const resizeObserver = new ResizeObserver(entries => {
	for (let entry of entries) {
		pageBodyWidth = entry.contentRect.width;
		pageBodyHeight = entry.contentRect.height;
	}

	// set a new attribute atribbute to the children component
	navbarComponent.setAttribute("page-width", pageBodyWidth)
	footerComponent.setAttribute("page-width", pageBodyWidth)
});

resizeObserver.observe(htmlDocBody);
