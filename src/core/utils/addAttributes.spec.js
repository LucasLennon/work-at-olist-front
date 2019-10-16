import { JSDOM } from "jsdom"
import addAttributes from "./addAttributes";

const TESTE_ATTRIBUTES = [
    {   
        name: "type",
        value: 'text',
    },
    {   
        name: "model",
        value: 'teste',
    },
    {   
        name: "required",
        value: true,
    }
]

describe('Test addAttributes', () => { 
    it('should inject attribute to element', () => {
        const dom = new JSDOM()
        const element = dom.window.document.createElement('input');
        addAttributes(element, TESTE_ATTRIBUTES)
        expect(element.type).toBe('text')
        expect(element.model).toBe('teste')
        expect(element.required).toBe(true)
    })
}) 