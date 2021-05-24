const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    test("Translation with text and locale fields: POST request to /api/translate", async () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ text: "Mangoes are my favorite fruit.", locale: "american-to-british" });
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { text: "Mangoes are my favorite fruit.", tranlation: "Mangoes are my <span class=\"highlight\">favourite</span> fruit." });
    });

    test("Translation with text and invalid locale field: POST request to /api/translate", () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ text: "Mangoes are my favorite fruit.", locale: "something" });
        assert.equal(res.status, 200);
        assert.deepEqual(req.body, { error: "Invalid value for locale field" });
    });

    test("Translation with missing text field: POST request to /api/translate", () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ locale: "american-to-british" });
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Required field(s) missing" });
    });

    test("Translation with missing locale field: POST request to /api/translate", () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ text: "Mangoes are my favorite fruit." });
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "Required field(s) missing" });
    });

    test("Translation with empty text: POST request to /api/translate", () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ text: "", locale: "american-to-british" });
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "No text to translate" });
    });

    test("Translation with text that needs no translation: POST request to /api/translate", () => {
        const res = await chai.request(server)
            .post("/api/translate")
            .set("Content-Type", "application/json")
            .send({ text: "Like a high tech Rube Goldberg machine.", locale: "american-to-british" });
        assert.equal(res.status, 200);
        assert.deepEqual({ text: "Like a high tech Rube Goldberg machine.", tranlation: "Everything looks good to me!" });
    });
});
