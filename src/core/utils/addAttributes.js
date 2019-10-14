export default function addAttributes(target, attributes) {
    for (let index = 0; index < attributes.length; index++) {
        const key = attributes[index].name;
        const value = attributes[index].value;
        target[key] = value;
    }
}