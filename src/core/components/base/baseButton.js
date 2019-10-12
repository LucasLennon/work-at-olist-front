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
    // // Methods
    // handleClick(e) {
    //     alert("Sup?");
    // }

    // // Componente
    // setButton(){
    //     const button = this.shadowRoot.querySelector("button");
    //     button.addEventListener("click", this.handleClick);
    // }
}

export default window.customElements.define('b-button', BaseButtonComponent);