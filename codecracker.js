const alphabetKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
const decryptionKey = ["!", ")", "\"", "(", "£", "*", "%", "&", ">", "<", "@", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "+"];

module.exports = {
    decrypt: (message) => {
        if(!message) {
            return 0;
        }

        let result = "";
        message = message.toLowerCase();
        for(let char of message) {
            const getIndex = alphabetKey.indexOf(char);
            if(getIndex > -1) {
                result += decryptionKey[getIndex];
            }
        }

        return result;
    
    },

    encrypt: (message) => {
        if(!message) {
            return 0;
        }

        let result = "";
        message = message.toLowerCase();
        for(let char of message) {
            const getIndex = decryptionKey.indexOf(char);
            if(getIndex > -1) {
                result += alphabetKey[getIndex];
            }
        }

        return result;
    
    }    
}
