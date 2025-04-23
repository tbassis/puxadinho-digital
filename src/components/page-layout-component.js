
const pageLayoutTemplate = document.createElement("template");
const pageLayoutStyle = document.createElement("style");

let pageWidth;
let pageHeight;

class pageLayout extends HTMLElement {
	static get observedAttributes () {
    return ["page-width", "page-height"];
  } 

	constructor() {
		super();
		// this.style.display = "flex";
		// this.style.flexDirection = "column";
	};

	connectedCallback() {
		this.attachShadow({ mode: "open" })

		this.shadowRoot.appendChild(pageLayoutTemplate.content.cloneNode(true));
		this.shadowRoot.appendChild(pageLayoutStyle);
	};

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "page-width":
				this.style.width = `${newValue}px`;
				pageWidth = newValue; 
				break;
			case "page-height":
				this.style.height = `${newValue}px`;
				pageHeight=newValue;
			default:
				break;
		}
    // Set custom element's width equal to the parent's width 
    //  this.style.width = `${newValue}px`; 
  }
	
};



pageLayoutTemplate.innerHTML = `
<header>
		<h1>Puxadinho Digital</h1>
		<nav>
			<a id="nav-link-index" href="index.html" data-lang="pt-BR" tabindex="0>Entrada</a>
			<a id="nav-link-contact" href="dev.html" data-lang="pt-BR">Escritório</a>
			<a id="nav-link-blog" href="blog.html" data-lang="pt-BR">Biblioteca</a>
			<a id="nav-link-photos" href="photos.html" data-lang="pt-BR">Galeria</a>
			<a id="nav-link-about" href="about.html" data-lang="pt-BR">Sobre</a>
		</nav>
</header>
<main>
	<slot name="page-content"></slot>
</main>
<footer>
	<slot name="footer-content"><slot>
</footer>
`
pageLayoutStyle.textContent = `
page-layout-content {
	display: flex;
	flex-direction: column;
}

header {
	min-height: 5em;
	/* Altura fixa */
	background-color: whitesmoke;
	color: black;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 12px;
}

main {
	flex-grow: 1;
	/* Ocupa o espaço restante */
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

	
footer {
	height: 5em;
	/* Altura fixa */
	background-color: whitesmoke;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
}

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
    header{
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

customElements.define("page-layout-component", pageLayout);