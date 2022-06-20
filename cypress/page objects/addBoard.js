class AddBoard {
  get addBoard() {
    return cy.get('div[class="vs-c-organization-boards__item--add-new"]');
  }

  get addBoardTitle() {
    return cy.get('input[type="text"]').eq(1);
  }
  get nextBtn() {
    return cy.get('button[type="button"]').eq(3);
  }

  get radioBtn() {
    return cy.get(".vs-c-radio-check").eq(0);
  }
  get nextBtn2() {
    return cy.get('button[type="button"]').eq(3);
  }
  get nextBtn3() {
    return cy.get('button[type="button"]').eq(3);
  }
  get nextBtn4() {
    return cy.get('button[type="button"]').eq(3);
  }
  get finishBtn() {
    return cy.get('button[type="button"]').eq(3);
  }

  add(title) {
    this.addBoard.click();
    this.addBoardTitle.type(title);
    this.nextBtn.click();
    this.radioBtn.click();
    this.nextBtn2.click();
    this.nextBtn3.click();
    this.nextBtn4.click();
    this.finishBtn.click();
  }
}

export const addBoard = new AddBoard();
