describe('Petstore Get Inventory Testing', () => {
    it('Create a user', () => {
        let body = {
                "id": 0,
                "username": Cypress.env('username'),
                "firstName": "Aditya",
                "lastName": "Pratama",
                "email": "aditya@gmail.com",
                "password": Cypress.env('password'),
                "phone": "089567564432",
                "userStatus": 0
              }
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200);
        });
    });

    const loginUser = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login registered User', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200);
        });
    })
})