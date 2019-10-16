import {
    atLeastSixCharacters,
    atLeastOneUpperCase,
    atLeastOneNumber 
} from "./formValidation.js";

const PASSWORD_SUCCESS = "123testeTeste"
const PASSWORD_ERROR = "teste"

describe('Test atLeastSixCharacters', () => {
    it('should "123testeTeste" return true', () => {
        expect(atLeastSixCharacters(PASSWORD_SUCCESS)).toBe(true)
    })
    it('should "teste" return false', () => {
        expect(atLeastSixCharacters(PASSWORD_ERROR)).toBe(false)
    })
}) 

describe('Test atLeastOneUpperCase', () => {
    it('should "123testeTeste" return true', () => {
        expect(atLeastOneUpperCase(PASSWORD_SUCCESS)).toBe(true)
    })
    it('should "teste" return false', () => {
        expect(atLeastOneUpperCase(PASSWORD_ERROR)).toBe(false)
    })
}) 

describe('Test atLeastOneNumber', () => {
    it('should "123testeTeste" return true', () => {
        expect(atLeastOneNumber(PASSWORD_SUCCESS)).toBe(true)
    })
    it('should "teste" return false', () => {
        expect(atLeastOneNumber(PASSWORD_ERROR)).toBe(false)
    })
}) 