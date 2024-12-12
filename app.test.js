const sortedFunction = require("./app.js");

test("Data First Object name should be Manshad", () => {
  const data = sortedFunction();
  expect(data?.[0]?.name)?.toBe("Manshad");
});

test("Data Object should not be null", () => {
  const data = sortedFunction();
  expect(data?.length)?.not.toBe(null);
  expect(data).toHaveLength(4)
});
