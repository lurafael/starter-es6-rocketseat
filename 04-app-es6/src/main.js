import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formElement = document.querySelector('#repo-form');
        this.listElement = document.querySelector('#repo-list');
        this.inputElement = document.querySelector('input[name="repository"]');
        this.modalOverlay = document.querySelector('.modal-overlay');
        this.closeModal = document.querySelector('.close-modal');
        this.repositoryEmpty = document.querySelector('.repository-empty');
        this.buttonElement = document.querySelector('button');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();
        const repoInput = this.inputElement.value;

        if (repoInput.length !== 0) {
            this.repositoryEmpty.classList.remove('active');
            this.setLoading();

            try {
                const response = await api.get(`/repos/${repoInput}`);
                const { name, description, html_url, owner: { avatar_url } } = response.data;

                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url
                });

                this.render();

            } catch (err) {
                this.modalOverlay.classList.add('active');
                this.closeModal.addEventListener('click', () => this.modalOverlay.classList.remove('active'));
            }

            this.setLoading(false);

        } else {
            this.repositoryEmpty.classList.add('active');
        }
    }

    render() {
        this.listElement.innerHTML = '';

        for (let repo of this.repositories) {
            let wrapperElement = document.createElement('li');
            let imgElement = document.createElement('img');
            let titleElement = document.createElement('strong');
            let descriptionElement = document.createElement('p');
            let linkElement = document.createElement('a');

            imgElement.setAttribute('src', repo.avatar_url);
            titleElement.appendChild(document.createTextNode(repo.name));
            descriptionElement.appendChild(document.createTextNode(repo.description));

            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', repo.html_url);
            linkElement.appendChild(document.createTextNode('Acessar repositório'));

            wrapperElement.appendChild(imgElement);
            wrapperElement.appendChild(titleElement);
            wrapperElement.appendChild(descriptionElement);
            wrapperElement.appendChild(linkElement);

            this.listElement.appendChild(wrapperElement);
        }
    }

    setLoading(loading = true) {
        if (loading) {
            const loadingElement = document.createElement('span');

            loadingElement.setAttribute('id', 'loading');
            loadingElement.appendChild(document.createTextNode('Carregando...'));

            return this.formElement.appendChild(loadingElement);
        }
        return this.formElement.querySelector('#loading').remove();
    }
}

new App();