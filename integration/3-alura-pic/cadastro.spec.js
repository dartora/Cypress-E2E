describe("Cadastro de usuarios Alura pic.", () => {
  before(() => {
    // runs once before all tests
  });

  beforeEach(() => {
    // runs before every it() test block
    cy.visit("/");
  });

  it("verifica mensagens validacao", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Email is required!");
  });

  it("verifica mensagens de email invalido", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("rodolfo");

    cy.contains("small.text-danger.d-block.mt-2", "Invalid e-mail").should(
      "be.visible"
    );
  });
  it("verifica mensagens validacao", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Email is required!").should(
      "be.visible"
    );

    cy.contains("button", "Register").click();

    cy.contains(
      "small.text-danger.d-block.mt-2",
      "Full name is required!"
    ).should("be.visible");

    cy.contains(
      "small.text-danger.d-block.mt-2",
      "User name is required!"
    ).should("be.visible");

    cy.contains(
      "small.text-danger.d-block.mt-2",
      "Password is required!"
    ).should("be.visible");
  });

  it("verifica mensagens de nome completo invalido", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.get('input[formcontrolname="fullName"]').type("r");

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Mininum length is 2").should(
      "be.visible"
    );
  });
  it("verifica mensagens de user name invalido", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.get('input[formcontrolname="userName"]').type("r");

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Mininum length is 2").should(
      "be.visible"
    );
  });
  it("verifica mensagens de user name uppercase", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.get('input[formcontrolname="userName"]').type("AA");

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Must be lower case").should(
      "be.visible"
    );
  });
  it("verifica mensagens de password invalido", () => {
    // Write your test case one here
    cy.contains("a", "Register now").click();

    cy.contains("button", "Register").click();

    cy.get('input[formcontrolname="password"]').type("r");

    cy.contains("button", "Register").click();

    cy.contains("small.text-danger.d-block.mt-2", "Mininum length is 8").should(
      "be.visible"
    );
  });
});
