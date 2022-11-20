//Generate all alphabet by char code
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetKey = alpha.map((x) => String.fromCharCode(x).toLowerCase());
alphabetKey.push(" "); // white space
//console.table(alphabetKey);

const decryptionKey = ["!", ")", "\"", "(", "£", "*", "%", "&", ">", "<", "@", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "+"];

const codeCracker = (message, encrypt) => {
    if(!message) {
        return -1;
    }

    let result = ""
    message = message.toLowerCase()
    if(encrypt) { // Encrypt code
        for(let char of message) {
            const getIndex = decryptionKey.indexOf(char);
            if(getIndex > -1) {
                result += alphabetKey[getIndex];
            }
        }
    }
    else { // Decrypt alphabet
        for(let char of message) {
            const getIndex = alphabetKey.indexOf(char);
            if(getIndex > -1) {
                result += decryptionKey[getIndex];
            }
        }
    }

    return result
}

module.exports = codeCracker;
