const {add, sub, multiply, divide} = require('../calculator')

var sum;

beforeAll( () => {
    sum = 0;
});


test.each( [ [1,1,2], [1,2,3] , [0,0,0], [2,1,3], [1,-1,0] ] )(
    'test %i + %i equals %i', (a,b,expected) => {
        expect(add(a,b)).toBe(expected);
    }
);

test.each( [ [1,1,0], [1,2,-1] , [0,0,0], [2,1,1], [1,-1,2] ] )(
    'test %i - %i equals %i', (a,b,expected) => {
        expect(sub(a,b)).toBe(expected);
    }
);

test('test 3 * 2 to equal 3', () => {
    expect( multiply(3,2) ).toBe(6);
});

test('test 8 / 2 to equal 4', () => {
    expect( divide(8,2) ).toBe(4);
});

test('Division throws error' , () => {
        expect( () => divide(8,0) ).toThrow();
});
