var crypto = require("crypto");
import MainPage from "./pageObjects/main.page"

describe('PU Project smoke suite', () => {

  it('Navigate to the test app', () => {
    MainPage.visit();
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('User adds a course', () => {
    MainPage.addCourse('course 1')

    const testTodoRecord = cy.get('li');
    expect(testTodoRecord).to.exist;
    testTodoRecord.should('have.text', 'course 1✅');
  })

  it('User deletes a course', () => {
    MainPage.deleteCourse();
    cy.get('li').should('not.exist');
  })
})