const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
    it("returns the employee's role in the company", () => {
      expect(getEmployerRole('Satti', employees)).toEqual('Developer')
      expect(getEmployerRole('Jenny', employees)).toEqual('Sales Associate')

  });
});
