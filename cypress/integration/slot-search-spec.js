describe('slot checking app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.dvtaonlineni.gov.uk/public/changeDrivingTest_1CollectInfo.aspx')
  })

  it('check slot availability for BALMORAL, BELFAST', () => {
    cy.get('#slotBookingRef').click();
    cy.get('#slotBookingRef').type('978189670A/0');
    cy.get('#BSP_Driver_DriverNo').click();
    cy.get('#BSP_Driver_DriverNo').type('41352667');
    cy.get('#BSP_Driver_DateOfBirth').click();
    cy.get('#BSP_Driver_DateOfBirth').type('20/11/1990');
    cy.get('#nextButton').click();
    cy.get('#dvtaForm').submit();

    cy.get('#slotTestCentre').select('BALMORAL, BELFAST');
    cy.get('#slotTestCentre').type('BB')
    cy.get('#slotSearchStartDate_day').select('01');
    cy.get('#slotSearchStartDate_month').select('Jul');
//    cy.get('#slotSearchStartDate_year').type('2021');
    cy.get('#slotSearchEndDate_day').select('30');
    cy.get('#slotSearchEndDate_month').select('Jul');
//    cy.get('#slotSearchEndDate_year').type('2021');
    cy.get('#nextButton').click();
    cy.get('#dvtaForm').submit();
    cy.get('.slotListDiv').click();

    cy.get('.data:nth-child(2) > td:nth-child(2)').should('not.exist');

  })
});
