describe('SwagLabs', function() {
  before(function() {
    cy.visit('https://www.saucedemo.com/');
  });

  describe('Login', function() {
    it('fails with wrong credentials', function() {
      cy.get('#user-name').type('tyhäm käyttäjä');
      cy.get('#password').type('sAlaSAna');
      cy.contains('LOGIN').click();
      cy.contains('Epic sadface');
    });

    it('succeeds with valid credentials', function() {
      cy.reload();
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.contains('LOGIN').click();
      cy.contains('Products');
    });
  });

  describe('Add & remove products', function() {
    it('Backbag can be added to cart', function() {
      cy.contains('Sauce Labs Backpack').click();
      cy.contains('ADD TO CART').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Sauce Labs Backpack');
      cy.contains('Continue Shopping').click();
    });

    it('Bolt T-Shirt can be added to cart', function() {
      cy.contains('Bolt T-Shirt').parent().parent()
        .contains('ADD TO CART').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Sauce Labs Backpack');
      cy.contains('Sauce Labs Bolt T-Shirt');
    });

    it('Backbag can be removed from cart', function() {
      cy.contains('Sauce Labs Backpack').parent()
        .contains('REMOVE').click();
      cy.should('not.exist');
    });
  });

  describe('Checkout', function() {
    it('right item is shown in overview', function() {
      cy.contains('CHECKOUT').click();
      cy.get('#first-name').type('Lempäälän');
      cy.get('#last-name').type('Kuningas');
      cy.get('#postal-code').type('37500');
      cy.contains('CONTINUE').click();
      cy.contains('Checkout: Overview');
      cy.contains('Sauce Labs Bolt T-Shirt');
    });

    it('can be finished', function() {
      cy.contains('FINISH').click();
      cy.contains('THANK YOU FOR YOUR ORDER');
    });
  });
});