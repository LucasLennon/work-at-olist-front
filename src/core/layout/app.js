const html = `
<div>
    <slot></slot>
</div>
`
const style = `
<style>
    div {
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>`;

const template = document.createElement('template');

template.innerHTML = `
    ${style}
    ${html}
`;

class MainApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default window.customElements.define('main-app', MainApp);
