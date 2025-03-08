// crafted by Tulio Assis

const headerTemplate = document.createElement('template')
const style = document.createElement("style");

headerTemplate.innerHTML = `
<div class="nav-container">
  <h1>Puxadinho Digital</h1>
  <nav>
    <a id="nav-link-index" href="index.html" data-lang="pt-BR">Entrada</a>
    <a id="nav-link-blog" href="blog.html" data-lang="pt-BR">Biblioteca</a>
    <a id="nav-link-photos" href="photos.html" data-lang="pt-BR">Fotos</a>
    <a id="nav-link-about" href="about.html" data-lang="pt-BR">Sobre</a>
    <a id="nav-link-contact" href="contact.html" data-lang="pt-BR">Contato</a>
  </nav>
</div>
`

style.textContent = `
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    font-family: var(--font-dm-sans);
  }

  nav {
    display: flex;
    justify-content: right;
    align-items: center;
    flex-grow: 1;
    gap: 16px
    padding-right: 32px;
  }

  h1 {
    letter-spacing: 0.5em;
    padding-left: 32px;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    position: relative;

    color: black;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.5em;
  }

  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
    
  a:hover:after { 
    width: 100%; 
    left: 0; 
  }

  @media (max-width: 1090px) {
    h1 {
      font-size: medium;
      padding-left: 16px;
    }
    nav {
      padding-right: 16px;
    }
    a {
      display: none;
    }
  }
`

// create a header class, and clone the content of the template into it
// add an observer to make the component size responsive
class navbar extends HTMLElement {
  static observedAttributes = ["page", "page-width"];

  constructor() {
    // Always call super first in constructor
    super()
    console.log("entroiu construtor");
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    // Create a shadow root
    this.attachShadow({ mode: 'open' })

    // Attach the created elements to the shadow dom
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))
    this.shadowRoot.appendChild(style);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.width = `${newValue}px`; // set the width of the custom element
  }
}

// define a web component called 'navbar-component' using the header class
customElements.define('navbar-component', navbar)
