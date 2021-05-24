const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const t = new Translator();

const highlighter = (string) => {
    return `<span class="highlight">${string}</span>`;
}


suite('Unit Tests', () => {
    suite.only("Translate to British English", () => {

        test("Translate Mangoes are my favorite fruit. to British English", () => {
            const translated = t.toBritish("Mangoes are my favorite fruit.");
            assert.equal(translated, `Mangoes are my ${highlighter("favourite")} fruit.`)
        });
        
        test("Translate I ate yogurt for breakfast. to British English", () => {
            const ted = t.toBritish("I ate yogurt for breakfast.");
            assert.equal(ted, `I ate ${highlighter("yoghurt")} for breakfast.`);
        });

        test("Translate We had a party at my friend's condo. to British English", () => {
            const ted = t.toBritish("We had a party at my firend's condo.");
            assert.equal(ted, `We had a praty at my firend's ${highlighter("flat")}.`)
        });

        test("Translate Can you toss this in the trashcan for me? to British English", () => {
            const ted = t.toBritish("Can you toss this in the trashcan for me?");
            assert.equal(ted, `Can you toss this in the ${highlighter("bin")} for me?`);
        });
        
        test("Translate The parking lot was full. to British English", () => {
            const ted = t.toBritish("The parking lot was full.");
            assert.equal(ted, `The ${highlighter("car park")} was full.`);
        });
        
        test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
            const ted = t.toBritish("Like a high tech Rube Goldberg machine.");
            assert.equal(ted, "Everything looks good to me!");
        });
        
        test("Translate To play hooky means to skip class or work. to British English", () => {
            const ted = t.toBritish("To play hooky means to skip class or work.");
            assert.equal(ted, `To ${highlighter("bunk off")} means to skip class or work.`);
        });
        
        test("Translate No Mr. Bond, I expect you to die. to British English", () => {
            const ted = t.toBritish("No Mr. Bond, I expect you to die.");
            assert.equal(ted, `No ${highlighter("Mr")} Bond, I expect you to die.`);
        });
        
        test("Translate Dr. Grosh will see you now. to British English", () => {
            const ted = t.toBritish("Dr. Grosh will see you now.");
            assert.equal(ted, `${highlighter("Dr")} Grosh will se you now.`);
        });
        
        test("Translate Lunch is at 12:15 today. to British English", () => {
            const ted = t.toBritish("Lunch is at 12:15 today.");
            assert.equal(ted, `Lunch is at ${highlighter("12.15")} today.`);
        });

    });

    suite("Translate to American English", () => {

        test("Translate We watched the footie match for a while. to American English", () => {
            const ted = t.toAmerican("We watched the footie match for a while.");
            assert.equal(ted, `We watched the ${highlighter("soccer")} match for a while`);
        });

        test("Translate Paracetamol takes up to an hour to work. to American English", () => {
            const ted = t.toAmerican("Paracetamol takes up to an hour to work.");
            assert.equal(`${highlighter("Tylenol")} takes up to an hour to work.`);
        });

        test("Translate First, caramelise the onions. to American English", () => {
            const ted = t.toAmerican("First, caramelise the onions.");
            assert.equal(ted, `First, ${highlighter("caramelize")} the onions.`);
        });

        test("Translate I spent the bank holiday at the funfair. to American English", () => {
            const ted = t.toAmerican("I spent the bank holiday at the funfair.");
            assert.equal(ted, `I spent the ${highlighter("public holiday")} at the ${highlighter("carniaval")}.`);
        });

        test("Translate I had a bicky then went to the chippy. to American English", () => {
            const ted = t.toAmerican("I had a bicky then went to the chippy.");
            assert.equal(ted, `I had a ${highlighter("cookie")} then went to the ${highlighter("fish-and-chip shop")}`);
        });

        test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
            const ted = t.toAmerican("I've just got bits and bobs in my bum bag.");
            assert.equal(ted, `I've just got ${highlighter("odds and ends")} in my ${highlighter("fanny pack")}.`);
        });

        test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
            const ted = t.toAmerican("The car boot sale at Boxted Airfield was called off.");
            assert.equal(ted, `The ${highlighter("swap meet")} at Boxted Airfield was called off.`);
        });

        test("Translate Have you met Mrs Kalyani? to American English", () => {
            const ted = t.toAmerican("Have you met Mrs Kalyani?");
            assert.equal(`Have you met ${highlighter("Mrs.")} Kalyani?`);
        });

        test("Translate Prof Joyner of King's College, London. to American English", () => {
            const ted = t.toAmerican("Prof Joyner of King's College, London.");
            assert.equal(ted, `${highlighter("Prof.")} Joyner of King's College, London.`);
        });

        test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
            const ted = t.toAmerican("Tea time is usually around 4 or 4.30.");
            assert.equal(ted, `Tea time is usually around 4 or ${highlighter("4:30")}`);
        });

    });

    suite("Highlight translation", () => {
       
        test("Highlight translation in Mangoes are my favorite fruit.", () => {
            const ted = t.toBritish("Mangoes are my favorite fruit.");
            assert.include(ted, `${highlighter("favourite")}`);
        });

        test("Highlight translation in I ate yogurt for breakfast.", () => {
            const ted = t.toBritish("I ate yogurt for breakfast.");
            assert.include(ted, `${highlighter("yoghurt")}`);
        });

        test("Highlight translation in We watched the footie match for a while.", () => {
            const ted = t.toAmerican("We watched the footie match for a while.");
            assert.include(ted, `${highlighter("soccer")}`);
        });

        test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
            const ted = t.toAmerican("Paracetamol takes up to an hour to work.");
            assert.include(ted, `${highlighter("Tylenol")}`);
        });

    });
});
