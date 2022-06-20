class CreateOrganization {
  get addOrganization() {
    return cy.get(
      'div[class="vs-c-my-organization vs-c-my-organization--add-new not-sortable"]'
    );
  }
  get nameInput() {
    return cy.get('input[type="text"]');
  }
  get nextBtn() {
    return cy.get('button[type="button"]').eq(3);
  }
  get createBtn() {
    return cy.get('button[type="button"]').eq(3);
  }
  get boardsModal() {
    return cy.get(".vs-c-modal__body");
  }
  get okBtn() {
    return this.boardsModal.find("button").last();
  }

  create(name) {
    this.addOrganization.click();
    this.nameInput.type(name);
    this.nextBtn.click();
    this.createBtn.click();
    this.okBtn.click();
  }
}

export const createOrganization = new CreateOrganization();
