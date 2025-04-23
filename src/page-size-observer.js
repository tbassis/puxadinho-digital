// Crafted by Tulio Assis
// This script implements an ResizeObserver of the HTML's body width and height
// Then it sets the attributes in all children components used in the page


/**
 * @param {number} pageBodyWidth
 * @param {number} pageBodyHeight
 */
let pageBodyWidth;
let pageBodyHeight;


const htmlDocBody = document.querySelector('body');
const pageLayoutComponent = document.querySelector("page-layout-component")
const navbarComponent = document.querySelector("navbar-component");
const footerComponent = document.querySelector("footer-component");

const resizeObserver = new ResizeObserver(entries => {
	for (let entry of entries) {
		pageBodyWidth = entry.contentRect.width;
		pageBodyHeight = entry.contentRect.height;
	}

	console.log(navbarComponent);
	

	if (pageLayoutComponent) {
		pageLayoutComponent.setAttribute("page-width", pageBodyWidth);
		pageLayoutComponent.setAttribute("page-height", pageBodyHeight);
	};



	if(navbarComponent) navbarComponent.setAttribute("page-width", pageBodyWidth);
	
	if(footerComponent) footerComponent.setAttribute("page-width", pageBodyWidth);


});

resizeObserver.observe(htmlDocBody);
