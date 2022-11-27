class MainPage {

    get inputField() {
        return cy.get('input');
    }

    get plusButton() {
        return cy.get('button');
    }

    get courseDeleteButton() {
        return cy.get('.App-tick');
    }

    visit() {
        cy.visit('http://localhost:3000/');

        return this;
    }

    addCourse(courseName) {
        this.inputField.type(courseName);
        this.plusButton.click();

        return this;
    }

    deleteCourse() {
        this.courseDeleteButton.click();
        return this;
    }
}
export default new MainPage();