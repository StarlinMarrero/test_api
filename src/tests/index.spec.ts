import request from "supertest";
import app from "../app";

describe("GET /task", () => {
    test("Should return 404 ok", async () => {
        await request(app).get("/task").send().expect(404);
    });
});
describe("login", () => {
    test("", async () => {
        await request(app)
            .post("/login")
            .send({
                email: "test@test",
                password: "test",
            })
            .expect(200, (err, res) => {
                expect(res.body.token).toBeDefined();
            });
    });
});
