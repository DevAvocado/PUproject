class MainPage {

    get inputField() {
        return cy.get('input');
    }

    visit() {
        cy.visit('http://localhost:3000/');

        return this;
    }

    addCourse(courseName) {
        // const inputField = cy.get('input');
        
        const plusButton = cy.get('button');

        this.inputField.type(courseName);
        plusButton.click();

        return this;
    }

    deleteCourse() {
        cy.get('.App-tick').click();

        return this;
    }
}
export default new MainPage();