const html = `
    <div class="card">
        <slot></slot>
    </div>
`;
const style = `
<style>
    div.card {
        display: grid;
        justify-items: center;
        justify-content: center;
        background: #FFFFFF;
        border: 3px solid #F2F2F2;
        box-sizing: border-box;
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class BaseCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default window.customElements.define('base-card', BaseCard);