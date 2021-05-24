const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const britishToAmericanSpelling = Object.keys(americanToBritishSpelling).reduce((acc, curr) => {
    acc[americanToBritishSpelling[curr]] = curr;
    return acc;
}, {});
const britishToAmericanTitles = Object.keys(americanToBritishTitles).reduce((acc, curr) => {
    acc[americanToBritishTitles[curr]] = curr;
    return acc;
}, {});

const capAndHighlight = (prev, curr) => {
    if (prev === undefined || prev === ".") {
        return `<span class="highlight">${curr[0].toUpperCase() + curr[0].slice(1)}</span>`;
    } else {
        return `<span class="highlight">${curr}</span>`;
    }
}

class Translator {

    toBritish(text) {
        const textToArr = text.split(" ");
        const translated = textToArr.map((word, idx, arr) => {
            word = word.toLowerCase();
            if (/^\d\d\.\d\d$/.test(word)) {
                return `<span class="highlight">${word.replace(/^(\d\d)\.(\d\d)$/, "$1:$2")}</span>`;
            }
            if (typeof americanToBritishSpelling[word] !== "undefined") {
                return capAndHighlight(arr[i - 1], americanToBritishSpelling[word]);
            }
            if (typeof americanToBritishTitles[word] !== "undefined") {
                return capAndHighlight(arr[i - 1], americanToBritishTitles[word][0].toUppercase() + americanToBritishTitles[word].slice(1));
            }
            if (typeof americanOnly[word] !== "undefined") {
                return capAndHighlight(arr[i - 1], americanOnly[word]);
            }
        });
        return translated.join(" ");
    }

    toAmerican(text) {
        
    }
}

module.exports = Translator;