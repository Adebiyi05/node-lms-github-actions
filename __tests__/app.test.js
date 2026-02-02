const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("returns LMS status", async () => {
    const res = await request(app).get("/");
    expect(res.body.app).toBe("raderlms");
  });
});

