/// <reference types='Cypress' />

import { loginScrum } from "../page objects/scrumLoginPOM";

describe("loginScrum", () => {
  const userData = {
    email: "milant@gmail.com",
    password: "Milanmilan1",
  };

  // before("visit login page", () => {
  // cy.visit("/", "/login");
  // });

  it("valid scrum login", () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as("validLogin");

    cy.visit("/", "/login");
    loginScrum.login(userData.email, userData.password);

    cy.wait("@validLogin").then((interception) => {
      expect(interception.response.statusCode).eq(200);
      cy.url().should("include", "/my-organizations");
    });
  });
  //it('validLogin', () => {
  //  cy.intercept({
  //  method: 'POST',
  //url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
  //}).as('validLogin')

  // cy.visit('https://cypress.vivifyscrum-stage.com/login')
  // loginScrum.login(
  // loginInfo.validEmail,
  // loginInfo.validPass
  // )

  // cy.wait('@validLogin').then(interception => {
  // expect(interception.response.statusCode).eq(200);
  //})
});
