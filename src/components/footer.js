//Implementation of footer-component
//Developed by Tulio Assis
const footerTemplate = document.createElement('template')

const copyright = 'Tulio Assis © ' + new Date().getFullYear()

footerTemplate.innerHTML = `
<div>
    <p>${copyright}</p>
    <p>Meu endereço</p>
</div>

<style>
div {
    display:flex;
    justify-content: right;
    gap: 16px;
}
</style>
`

const paddingXFooter = "32px";

// create a footer class, and clone the content of the template into it
class footer extends HTMLElement {
	static observedAttributes = ["page-width"];

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })

		this.style.paddingLeft = paddingXFooter;
		this.style.paddingRight = paddingXFooter;

		this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true))
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.style.width = `${newValue}px`; // Define a largura do Custom Element
		console.log(
			`Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
		);
	}
}

// define a custom element called 'footer-component' using the footer class
customElements.define('footer-component', footer)
