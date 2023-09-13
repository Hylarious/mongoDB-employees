const Employee = require('../employee.model.js');
const expect = require('chai').expect;

describe('Employee', () => {

    it('should throw error if no args', () => {
        const emp = new Employee({});

        emp.validate(err => {
            expect(err.errors).to.exist;
        });
    });

    it('should throw error if no firstName arg', () => {
        const emp = new Employee({lastName: 'Doe', department: 'IT'});

        emp.validate(err => {
            expect(err.errors.firstName).to.exist;
        });
    });

    it('should throw error if firstName arg is not a string', () => {

        cases = [ {}, []]
        for(let name of cases ) {
            const emp = new Employee({firstName: name, lastName: 'Doe', department: 'IT'});

            emp.validate(err => {
                expect(err.errors.firstName).to.exist;
            });
        }
    });

    it('should throw error if no lastName arg', () => {
        const emp = new Employee({firstName: 'John', department: 'IT'});

        emp.validate(err => {
            expect(err.errors.lastName).to.exist;
        });
    });

    it('should throw error if lastName arg is not a string', () => {

        cases = [ {}, []]
        for(let name of cases ) {
            const emp = new Employee({firstName: 'John', lastName: name, department: 'IT'});

            emp.validate(err => {
                expect(err.errors.lastName).to.exist;
            });
        }
    });

    it('should throw error if no department arg', () => {
        const emp = new Employee({firstName: 'John', lastName: 'Doe'});

        emp.validate(err => {
            expect(err.errors.department).to.exist;
        });
    });

    it('should throw error if department arg is not a string', () => {

        cases = [ {}, []]
        for(let dep of cases ) {
            const emp = new Employee({firstName: 'John', lastName: 'Doe', department: dep});

            emp.validate(err => {
                expect(err.errors.department).to.exist;
            });
        }
    });

    it('should throw error if no more than one arg', () => {

        const cases = [{firstName: 'John'}, {lastName: 'Doe'}, {department: 'IT'}];
        for(let arg of cases) {

            const emp = new Employee(arg);

            emp.validate(err => {
                expect(err.errors.department || err.errors.firstName || err.errors.lastName ).to.exist;
            });
        }
    });

    it('should work correct if atr is correct', () => {
        const cases = [
            {firstName: 'John', lastName: 'Doe', department: 'IT'}, 
            {firstName: 'Amanda', lastName: 'Doe', department: 'IT'}
        ];
        
        for( let employee of cases) {
            const emp = new Employee(employee);

            emp.validate(err => {
                expect(err).to.not.exist;
            })
        };
    });
});