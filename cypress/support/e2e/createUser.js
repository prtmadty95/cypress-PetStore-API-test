const { create } = require("combined-stream");

it('Create a user', () => {
    let body = {
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": Cypress.env('password'),
            "phone": "string",
            "userStatus": 0
          }
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.equal(200);
    });
});