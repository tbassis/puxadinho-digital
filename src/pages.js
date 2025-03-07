let pageWidth;
let pageHeight;

const navba = document.querySelector('navbar-component');
const htmlBody = document.querySelector('body');

const resizeObserver = new ResizeObserver(entries => {
	for (let entry of entries) {
		pageWidth = entry.contentRect.width;
		pageHeight = entry.contentRect.height;
	}

	// set a new attribute atribbute to the component
	navba.setAttribute("page-width", pageWidth)
});


resizeObserver.observe(htmlBody);
