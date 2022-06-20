class LoginScrum {
  get emailInput() {
    return cy.get(".el-input__inner").eq(0);
  }
  get passwordInput() {
    return cy.get(".el-input__inner").eq(1);
  }

  get logInBtn() {
    return cy.get('button[type="submit"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.logInBtn.click();
  }
}
export const loginScrum = new LoginScrum();
