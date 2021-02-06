const counterVogal = require('./counterVogal');

describe('Counter Vogal', () => {
    test('Deve retornar o número de vogais de uma string', () => {
        const string = counterVogal('bolo');
        expect(string).toEqual(2);
    })
})