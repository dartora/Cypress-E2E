describe("Buscar Fotos e dados API.", () => {
  before(() => {
    // runs once before all tests
  });
  beforeEach(() => {
    // runs before every it() test block
    cy.visit("/");
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context("Buscar fotos e dados", () => {
    // -- Start: Cypress Tests --
    it("Buscar fotos e dados", () => {
      // Write your test case one here
      const delayTime = Math.random() * 1000; //flaky test
      cy.request({
        method: "POST",
        url: "https://apialurapic.herokuapp.com/user/login",
        body: Cypress.env(),
      }).then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).is.not.empty;
        expect(res.body).to.have.property("id");
        expect(res.body.id).to.be.equal(1);
        expect(res.duration).to.be.lte(delayTime);
      });
    });
  });
});
