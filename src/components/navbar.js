// Created by Tulio Assis
// navbar.js implements the Web Component navbar-component, which is
// The Custom Element style its defined declaratively

// shadow root of the custom element
const navbarTemplate = document.createElement("template")
// declarative style of the component
const style = document.createElement("style");

class navbar extends HTMLElement {
  // define a observer to listed attributes and trigger attributeChangedCallback when the value change
  static get observedAttributes () {
    return ["page-width"];
  } 

  constructor() {
    // Always call super first in constructor
    super()
  }

  connectedCallback() {
    // Create a shadow root. The custom element itself is the shadow host
    this.attachShadow({ mode: 'open' })

    // Attach to the shadow tree the template and style element
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true))
    this.shadowRoot.appendChild(style);

    console.log("navbar entrou na arvore");
    
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Set custom element's width equal to the parent's width 
    this.style.width = `${newValue}px`; 
  }
}

// custom element layout
navbarTemplate.innerHTML = `
<div id="navbar-wrapper" class="nav-container">
  <h1>Puxadinho Digital</h1>
  <nav>
    <a id="nav-link-index" href="index.html" data-lang="pt-BR">Entrada</a>
    <a id="nav-link-contact" href="dev.html" data-lang="pt-BR">Escritório</a>
    <a id="nav-link-blog" href="blog.html" data-lang="pt-BR">Biblioteca</a>
    <a id="nav-link-photos" href="photos.html" data-lang="pt-BR">Galeria</a>
    <a id="nav-link-about" href="about.html" data-lang="pt-BR">Sobre</a>
  </nav>
</div>
`

// custom element style
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
    .nav-container {
      flex-direction: column;
      justify-content: center;
      padding: 10px 0px;
    }

    h1 {
      font-size: medium;
      padding-left: 16px;
    }

    nav {
      padding-right: 0px;
    }

    a {
      letter-spacing: 0.1em;
      padding: 5px;
    }
  }
`

// create a header class, and clone the content of the template into it
// add an observer to make the component size responsive
// define a web component called 'navbar-component' using the header class
customElements.define('navbar-component', navbar)
