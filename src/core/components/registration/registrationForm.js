const html = `
    <form>
        <slot></slot>
    </form>
`;
const style = `
<style>
    form {
        display: grid;
        grid-gap: 24px;
        justify-items: center;
        justify-content: center;
    }
</style>`;
const template = document.createElement('template');
template.innerHTML = `
    ${style}
    ${html}
`;
class RegistrationFormComponent extends HTMLElement {
    constructor() {
        super();
        this.setData()
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    setData(){
        return this.data = {
            name: 'null',
            email: null,
            password: null,
            confirmPassword: null,
        };
    }
    changeData(value){
        this.data = Object.assign(this.data, value)
    }
}

export default window.customElements.define('form-registration', RegistrationFormComponent);