// create an HTML template element
const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
<div class="nav-container">
  <h1>Puxadinho Digital</h1>
  <nav>
    <a href="index.html" data-lang="pt-BR">Inicio</a>
    <a href="" data-lang="pt-BR">Fotos</a>
    <a href="about.html" data-lang="pt-BR">Sobre</a>
    <a href="" data-lang="pt-BR">Blog</a>
    <a href="" data-lang="pt-BR">Contato</a>
  </nav>
</div>

<style>
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
  }

  h1 {
    letter-spacing: 0.5em;
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
</style>
`

const paddingX = "32px";

// create a header class, and clone the content of the template into it
// add an observer to make the component size responsive
class navbar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    // this observer will react according to the size of the parent component
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        this.style.width = `${width}px`; // Define a largura do Custom Element
        this.style.paddingLeft = paddingX;
        this.style.paddingRight = paddingX;
      }
    });

    // initiate the father component observer
    if (this.parentElement) {
      resizeObserver.observe(this.parentElement);
    }

    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(false))
  }
}

// define a web component called 'navbar-component' using the header class
customElements.define('navbar-component', navbar)