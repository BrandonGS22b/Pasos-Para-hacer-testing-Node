import {getUserById} from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    test('getUserById should call the callback with a user when id exists', (done) => {

        const id = 10;
        getUserById(id,(err, user) =>{
            expect(err).toBe('User not found with id ${id}' ); 
            expect(user).toBeUndefined();

            done(); 
        });
       

    });	
});

test('getUserById should call the callback with a user when id exists', (done) => {
    const id = 2; // ID que existe en el array de usuarios
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 2, name: 'Jane Doe' }); // Ajusta según el usuario esperado
      done();
    });
  });