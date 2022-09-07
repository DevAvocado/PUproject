var crypto = require("crypto");

describe('Parim interview tests', () => {
  it('Navigate to the Parim app', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('User adds a "todo" record', () => {
    const inputField = cy.get('input');
    const plusButton = cy.get('button');

    inputField.type('test_record');
    plusButton.click();

    const testTodoRecord = cy.get('li');
    expect(testTodoRecord).to.exist;
    testTodoRecord.should('have.text', 'test_record✅');
  })
  it('User deletes a record', () => {
    expect(cy.get('li')).to.exist
    cy.get('.App-tick').click();
    cy.get('li').should('not.exist');
  })
  it('User clicks + button without entering name of todo record', () => {
    cy.get('button').click();
    cy.get('li').should('not.exist');
  })
})