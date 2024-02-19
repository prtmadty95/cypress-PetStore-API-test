describe('Add New Pet to Inventory', () => {
    it('Add New Pet', () => {
        let body = {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
        cy.request('POST', '/pet', body).as('addNewPet');
        cy.get('@addNewPet').then(addPet => {
            expect(addPet.status).to.equal(200);
        });
    });
})