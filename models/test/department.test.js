const Department = require('../department.model.js');
const expect = require('chai').expect;


describe('Department', () => {
    
    it('should throw error if no "name" arg', () => {
        const dep = new Department({});

        dep.validate(err => {
            expect(err.errors.name).to.exist;
        });
    });
    
    it('should throw an error if "name" is not a string', () => {

        const cases = [{}, []];
        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err.errors.name).to.exist;
          });
      
        };
    });
    
    it('should throw an error if "name" is shorter than 5 or longer than 20 characters', () => {
        
        const cases = ['abc', 'moreThanTwentyCharacters'];
        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err.errors.name).to.exist;
          });
      
        };
    });

    it('should work correct if name atr is correct', () => {
        const cases = ['abcde', 'Loremipsum'];
        for( let name of cases) {
            const dep = new Department({ name });

            dep.validate(err => {
                expect(err).to.not.exist;
            })
        };
    });
});