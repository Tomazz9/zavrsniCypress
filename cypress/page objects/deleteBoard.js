class DeleteBoard {
  get configBtn() {
    return cy.get(".vs-c-site-logo").eq(10);
  }

  get deleteBtn() {
    return cy.get(
      'button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]'
    );
  }

  get yesBtn() {
    return cy.get('button[class="el-button--success el-button"]');
  }

  delete() {
    this.configBtn.click();
    this.deleteBtn.click();
    this.yesBtn.click();
  }
}

export const deleteBoard = new DeleteBoard();
