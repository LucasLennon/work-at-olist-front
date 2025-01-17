import addAttributes from "../../utils/addAttributes.js";

const html = `
    <div>
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
        color: var(--accent);
        font-size: 16px;
        line-height: 26px;
    }
    input {
        background: #FFFFFF;
        border: 1px solid #B6B9D0;
        box-sizing: border-box;
        box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);
        font-size: 16px;
        padding: .5rem .75rem;
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class Label {
    constructor(instance) {
        if (instance.getAttribute('label')){
            const LABEL = document.createElement('label');
            LABEL.innerHTML = instance.getAttribute('label');
            instance.shadowRoot.querySelector('div').prepend(LABEL)
        }
    }
    
}
class Input {
    constructor(instance) {
        const INPUT = instance.shadowRoot.querySelector('input');
        addAttributes(INPUT, instance.attributes)
        INPUT.onkeyup = () => console.log('changed');

        // INPUT.onkeyup(() => console.log('changed'))
        // INPUT.onchange(() => console.log('changed'))
    }
}
class BaseInputComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        new Label(this);
        new Input(this);
    }
}

export default window.customElements.define('b-input', BaseInputComponent);