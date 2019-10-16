const html = `
    <div class="card">
        <slot></slot>
    </div>
`;
const style = `
<style>
    div.card {
        background: #FFFFFF;
        border: 3px solid #F2F2F2;
        box-sizing: border-box;
        display: grid;
        margin: 2rem 0;
        padding: 3rem 0;
        width: 515px;
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class BaseCardComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default window.customElements.define('b-card', BaseCardComponent);