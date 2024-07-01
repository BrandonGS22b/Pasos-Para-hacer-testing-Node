import {characters} from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {
    test('characteres should containt flash , Superman', () => {
        
        
        console.log('characteres');


        /*expect(characters).toContain('Flash'); //el toContain flash  toca ponerlo igual al documento que estamos testeando
        expect(characters).toContain('Superman');
*/



    });

    test('first character should containt flash, and second superman', () => {
        const[flash, superman] = characters;
      
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');


    });


});