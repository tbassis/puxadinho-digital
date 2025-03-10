// crafted by Tulio Assis
// This component displays a list of all available posts

const blogListTemplate = document.createElement("template");
const blogListStyle = document.createElement("style");

blogListStyle.textContent = `
.post-title {
	font-size: 20px;
	margin-bottom: 4px;
}

.post-description {
	margin: 4px 0px 4px 16px;
	text-align: justify;
}

.publication {
	text-align: right;
}
`

function renderPosts() {
	const blogPostsContainer = document.createElement("article");
	blogPostsContainer.id = "blog-posts-container";

	posts.forEach((post, index) => {
		const card = document.createElement("section");

		card.innerHTML = `
			<h2 class="post-title">${index + 1}. <a href=${post.link}>${post.title}</a></h2>
			<p class="post-description">${post.description}</p>
			<p class="publication">${post.publication}</p>
		`

		blogPostsContainer.append(card);
	})

	blogListTemplate.innerHTML = blogPostsContainer.innerHTML;
}

class blogPostsList extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		renderPosts();

		this.attachShadow({ mode: 'open' })

		// Attach the created elements to the shadow dom
		this.shadowRoot.appendChild(blogListTemplate.content.cloneNode(true))
		this.shadowRoot.appendChild(blogListStyle);
	}
}

const posts = [
	{
		title: "As conexões em Death Stranding",
		publication: "20/03/2025",
		category: "Jogos",
		description: "Para mim Death String é um jogo sobre conexões e o jogo como um todo é direcionado pelos diferentes tipos de conexões abordadas ao longo da história. Neste texto reflito sobre essas conexões e os diferentes sentimentos que o jogo despertou em mim.",
		link: "index.html"
	},
	{
		title: "Reflexão sobre relógios, smartphones e o tempo",
		publication: "20/03/2025",
		category: "Jogos",
		description: "Em 2025 me presentei com um relógio digital para usar menos meu smartphone e entender melhor como tenho usado o meu tempo.",
		link: "index.html"
	}
];

customElements.define("blog-post-list-component", blogPostsList);
