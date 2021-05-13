
const {add, sub, multiply, divide} = require('../calculator')
const {isPalindrome, isAnagram} = require('../palindrome');

describe('Group test using jest', () => {


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

    test('Division throws error' , () => {
            expect( () => divide(8,0) ).toThrow();
    });


    test.each( ["radar","mom","level","solos","wow"] )(
        
        'test %s is palindrome',(text) =>{
            expect(isPalindrome(text)).toBeTruthy();
        }
    );

    test.each( ["charles","table","sun","cat","dragon"] )(
        
        'test %s is not palindrome',(text) =>{
            expect(isPalindrome(text)).not.toBe(true);
        }
    );

    test.each([ ["car","arc"],["cat","act"],["dog","god"],["word","drow"] ]) (
        
        'test if %s and %s are anagrams' , (text1, text2) => {
            expect(isAnagram(text1,text2)).toBeTruthy();
        }
    );

});