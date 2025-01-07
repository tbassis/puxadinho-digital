//Implementation of footer-component
//Developed by Tulio Assis
const footerTemplate = document.createElement('template')

const copyright = 'Tulio Assis © ' + new Date().getFullYear()

footerTemplate.innerHTML = `
<footer>
    <p>${copyright}</p>
    <address>Meu endereço</address>
</footer>
`

// create a header class, and clone the content of the template into it
class footer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true))
    }
}

// define a custom element called 'header-component' using the header class
customElements.define('footer-component', footer)