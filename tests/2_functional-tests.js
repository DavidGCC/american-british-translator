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
        
    });

    test("Translation with missing text field: POST request to /api/translate", () => {

    });

    test("Translation with missing locale field: POST request to /api/translate", () => {

    });

    test("Translation with empty text: POST request to /api/translate", () => {

    });

    test("Translation with text that needs no translation: POST request to /api/translate", () => {

    });
});
