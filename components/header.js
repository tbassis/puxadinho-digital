// create an HTML template element
const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
<header>
      <h1>Website de Tulio</h1>
      <nav>
        <a href="./index.html">Inicio</a>
        <a href="">Fotos</a>
        <a href="">Sobre</a>
        <a href="">Blog</a>
        <a href="">Contato</a>
      </nav>
    </header>
`

// create a header class, and clone the content of the template into it
class header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))
    }
}
// define a custom element called 'header-component' using the header class
customElements.define('header-component', header)