describe('api error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9999/songs', {
      statusCode: 500,
      delay: 2000,
    });
    cy.visit('/tools/songs');
  });
  it('show an error thingy', () => {
    //
  });
});
