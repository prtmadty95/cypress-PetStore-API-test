describe('Place an order for pet', () => {
    it('Order pet', () => {
        let body = {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2024-02-19T03:32:16.942Z",
            "status": "placed",
            "complete": true
          }
        cy.request('POST', '/store/order', body).as('orderPet');
        cy.get('@orderPet').then(orderPet => {
            expect(orderPet.status).to.equal(200);
        });
    });
})