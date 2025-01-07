// create an HTML template element
const template = document.createElement('template')

template.innerHTML = `
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

// create a navBar class, and clone the content of the template into it
class navBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define('nav-bar', navBar)