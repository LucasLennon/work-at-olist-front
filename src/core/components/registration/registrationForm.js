import {
    atLeastSixCharacters,
    atLeastOneUpperCase,
    atLeastOneNumber
} from '../../utils/formValidation'
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
        justify-content: center;
        grid-template-columns: minmax(300px, 375px);
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
        // this.setData()
        this._name = null;
        this._email = null;
        this._password = null;
        this._confirmPassword = null;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    get formReady() {
        if (
            !!this._name &&
            !!this._email &&
            !!this._password &&
            !!this._confirmPassword &&
            this._password === this._confirmPassword &&
            atLeastSixCharacters(this._password) &&
            atLeastOneUpperCase(this._password) &&
            atLeastOneNumber(this._password)
        ) {
            return true
        }
        return false
    }
    get formData() {
        return {
            name: this._name,
            email: this._email,
            password: this._password,
            confirmPassword: this._confirmPassword,
        };
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get confirmPassword() {
        return this._confirmPassword;
    }
    set name(value) {
        this._name = value
    }
    set email(value) {
        this._email = value
    }
    set password(value) {
        this._password = value
    }
    set confirmPassword(value) {
        this._confirmPassword = value
    }

    changeData(value){
        this.data = Object.assign(this.data, value)
    }
}

export default window.customElements.define('form-registration', RegistrationFormComponent);