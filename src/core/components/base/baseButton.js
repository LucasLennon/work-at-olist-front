const html = `
    <button>
        <slot></slot>
    </button>
`;
const style = `
<style>
    button {
        background: var(--primary);
        border: 0;
        color: #FFFFFF;
        padding: .5rem;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        width: 100%;
    }
    button:disabled{
        background: #ddd;
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class BaseButtonComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    setDisabled(value){
        const button = this.shadowRoot.querySelector("button");
        button.disabled = value;
    }
}

export default window.customElements.define('b-button', BaseButtonComponent);