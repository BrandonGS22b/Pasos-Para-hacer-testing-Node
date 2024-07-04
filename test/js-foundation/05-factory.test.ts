import {buildMakePerson} from "../../src/js-foundation/05-factory"


describe ('js-foundation/05-factory.ts', () => {

    const getUUID = () =>'1234';
    const getAge = () => 35;

    test('bulidMakePerson should return a function', () => {


        const makePerson = buildMakePerson({ getUUID , getAge });
        const jonhDoe = makePerson({name: 'John Doe', birthdate:'1985-10-21'})
            expect(jonhDoe).toEqual({ id: '1234',name: 'jonhDoe', birthdate: '1985-10-21',age: 35})
        






    }); 


})