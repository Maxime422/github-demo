describe('Application', () => {
  it('should add a task', () => {
    cy.visit('http://localhost:5173/todo');
    cy.get('input').type('My New Task');
    cy.contains('Add').click();
    cy.get('[name=task-field]').type('Another Task{enter}');
    cy.get('.task-list tr').should('have.length', 2);
  });

  it('should display the table of periodic elements', () => {
    cy.visit('http://localhost:5173/Periodic');
    cy.contains('Titanium').should('exist');
  });
});

