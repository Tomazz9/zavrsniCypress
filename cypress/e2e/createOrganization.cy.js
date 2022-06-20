/// <reference types='Cypress' />

import { loginScrum } from "../page objects/scrumLoginPOM";
import { createOrganization } from "../page objects/createOrganization";

describe("createOrg", () => {
  let boardId;
  const userInfo = {
    email: "milant@gmail.com",
    password: "Milanmilan1",
    orgName: "moja organizacija",
  };

  before("visit login page", () => {
    cy.visit("/", "/login");
    loginScrum.login(userInfo.email, userInfo.password);
    loginScrum.logInBtn.click();
  });

  it("valid create organization", () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    }).as("validCreate");
    createOrganization.create(userInfo.orgName);

    cy.wait("@validCreate").then((interception) => {
      boardId = interception.response.body.id;
      expect(interception.response.statusCode).to.exist;
      expect(interception.response.statusCode).eq(201);
      cy.url().should(
        "include",
        `https://cypress.vivifyscrum-stage.com/organizations/${boardId}/boards`
      );
    });
  });
});
