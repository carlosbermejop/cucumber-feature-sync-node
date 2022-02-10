import { environmentArgsReader } from "./environmentArgsReader.js";

describe("environmnetArgsReader - Basic tests", () => {
  it("should return a list with the correct environment variables", () => {
    const previousArgs = JSON.parse(JSON.stringify(process.argv));
    process.argv = [
      "yarn",
      "start",
      "--path",
      "path",
      "--access-token",
      "token",
      "--client-id",
      "test",
      "--uid",
      "uid",
      "--project-id",
      "1",
    ];

    const expected = {
      path: "path",
      accessToken: "token",
      clientId: "test",
      uid: "uid",
      projectId: "1",
    };
    const actual = environmentArgsReader();
    process.argv = previousArgs;

    expect(actual).toEqual(expected);
  });
});
