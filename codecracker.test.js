const codecracker = require("./codecracker");

describe("Code Cracker test cases",  () => {
    test("Decryption alphabet, \"abcd\" should be !)\"( ", () => {
        expect(codecracker.decrypt("abcd")).toBe("!)\"(");
    })

    test("Decrypt text, \"hello world\" should be &£aad+ldga(", () => {
        expect(codecracker.decrypt("hello world")).toBe("&£aad+ldga(");
    })

    test("Decrypt text with upperCase and lowerCase, \"Jest is Rulez\" should be <£hi+>h+gja£o", () => {
        expect(codecracker.decrypt("Jest is Rulez")).toBe("<£hi+>h+gja£o");
    })

    test("Decrypt text and some chars haven't in decryption key, \"Java is amazing!!\" should be <!k!+>h+!b!o>c%", () => {
        expect(codecracker.decrypt("Java is amazing!!")).toBe("<!k!+>h+!b!o>c%");
    })

    test("Anything alphabet, should be 0", () => {
        expect(codecracker.decrypt()).toBe(0);
    })


    test("Encrypt alphabet, \"among us\" should be lxzyr", () => {
        expect(codecracker.encrypt("among us")).toBe("lxzyr");
    })

    test("Encrypt code, \"&dl+ndj+!g£\" should be how you are", () => {
        expect(codecracker.encrypt("&dl+ndj+!g£")).toBe("how you are");
    })

    test("Encrypt code, \"<!k!h\"g>ei+>h+!l£hdb£\" should be javascript is awesome", () => {
        expect(codecracker.encrypt("<!k!h\"g>ei+>h+!l£hdb£")).toBe("javascript is awesome");
    })

    test("Anything code, should be 0", () => {
        expect(codecracker.encrypt()).toBe(0);
    })
})