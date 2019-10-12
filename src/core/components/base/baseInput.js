const html = `
    <div>
        <label>
            <slot></slot>
        </label>
        <input/>
    </div>
`;
const style = `
<style>
    div{
        display: grid;
        grid-auto-flow: row;
    }
    label{
        font-size: 16px;
        line-height: 26px;
    }
    input {
        background: #FFFFFF;
        border: 1px solid #B6B9D0;
        box-sizing: border-box;
        box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class BaseInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default window.customElements.define('base-input', BaseInput);