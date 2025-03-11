// crafted by Tulio Assis
// This component displays a list of all photo's project available

const photosListTemplate = document.createElement("template");
const photoListStyle = document.createElement("style");

photoListStyle.textContent = `
section {
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	box-shadow: 7px 7px 7px rgba(26, 235, 148, 0.21); 
  border-radius: 8px;

	padding: 16px;

	@media (max-width: 1090px) {
    margin-bottom: 32px;
  }
}

h2 {
	margin-top: 0px;
	margin-bottom: 8px;
}

img {
	border-radius: 10px;
}

.project-details {
	display: flex;
	gap: 16px;

	@media (max-width: 1090px) {
    flex-direction: column;
		
		justify-content: center;
		align-items: center;
  }
}

.post-title {
	font-size: 20px;
	margin-bottom: 4px;
}

.post-description {
	margin: 0px;
	text-align: justify;

	@media (max-width: 1090px) {
    max-width: 300px;
  }
}
`
function renderProjectslist() {
	const photosListContainer = document.createElement("article");

	projecs.forEach((project, index) => {
		const photoListItem = document.createElement("section");
		photoListItem.innerHTML = `
			<h2 class="post-title">${index + 1}. <a href="${project.url}">${project.title}</a></h2>
			<div class="project-details">
				<a href="${project.url}">
					<img loading="lazy" src="${project.img}" alt="Imagem de capa do projeto ${project.title}" width="300" height="200">
				</a>
				<p class="post-description">${project.description}</p>
			</div>
		`
		photosListContainer.appendChild(photoListItem)
	});

	photosListTemplate.innerHTML = photosListContainer.innerHTML;

	console.log(photosListContainer);
	
	
}

class projectsPhotosList extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' });

		renderProjectslist();

		// Attach the created elements to the shadow dom
		this.shadowRoot.appendChild(photosListTemplate.content.cloneNode(true));
		this.shadowRoot.appendChild(photoListStyle);
	}
}

const projecs = [
	{
		img: "https://live.staticflickr.com/483/19909311809_e5c846b145_c.jpg",
		title: "Espectador fotográfico",
		description: "Em 2014 comprei minha primeira camera digital, uma Sony Cybershot, e no mesmo ano comecei a ter o hábito de assistir show com minha câmera e com ela tirei fotos e bla bla bla",
		url: "https://pt.wikipedia.org/wiki/Bong_Joon-ho",
	},
	{
		img: "https://live.staticflickr.com/1904/31303999757_ed63d78019_h.jpg",
		title: "MIMO 2018",
		description: "Em 2019 tive a oportunidade de cobrir o Rec Beat. Na época eu estava tentando começar uma carreira na área da fotografia e direcionando para um área que eu gosto bastante que é fotografar apresentações musicais.",
		url: "https://pt.wikipedia.org/wiki/Bong_Joon-ho",
	},
	{
		img: "https://developer.mozilla.org/mdn-social-share.png",
		title: "Rec Beat 2019",
		description: "Em 2019 tive a oportunidade de cobrir o Rec Beat. Na época eu estava tentando começar uma carreira na área da fotografia e direcionando para um área que eu gosto bastante que é fotografar apresentações musicais.",
		url: "https://pt.wikipedia.org/wiki/Bong_Joon-ho",
	},
	{
		img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0102bd69393551.5b83316a1de19.jpg",
		title: "Noite da música pernambucana",
		description: "Em 2019 o café liberal organizana todas as quintas shows com artistas da música pernambucana contemporânea da época ",
		url: "https://pt.wikipedia.org/wiki/Mickey_17",
	},
	{
		img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0102bd69393551.5b83316a1de19.jpg",
		title: "Tuareg Blue",
		description: "Este projeto é dedicado ao período que eu estava no Instituto Candela, cursando o Tuareg Blue.",
		url: "https://pt.wikipedia.org/wiki/Mickey_17",
	},
]

customElements.define("photos-list-component", projectsPhotosList);