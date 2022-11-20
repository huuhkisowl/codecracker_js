const codecracker = require("./codecracker");

describe("Code Cracker test cases",  () => {
    test("Decryption alphabet, \"abcd\" should be !)\"( ", () => {
        expect(codecracker("abcd")).toBe("!)\"(");
    })

    test("Decrypt text, \"hello world\" should be &£aad+ldga(", () => {
        expect(codecracker("hello world")).toBe("&£aad+ldga(");
    })

    test("Decrypt text with upperCase and lowerCase, \"Jest is Rulez\" should be <£hi+>h+gja£o", () => {
        expect(codecracker("Jest is Rulez")).toBe("<£hi+>h+gja£o");
    })

    test("Decrypt text and some chars haven't in decryption key, \"Java is amazing!!\" should be <!k!+>h+!b!o>c%", () => {
        expect(codecracker("Java is amazing!!")).toBe("<!k!+>h+!b!o>c%");
    })

    test("Nothing alphabet, should be -1", () => {
        expect(codecracker(null)).toBe(-1);
    })


    test("Encrypt alphabet, \"among us\" should be lxzyr", () => {
        expect(codecracker("among us", true)).toBe("lxzyr");
    })

    test("Encrypt code, \"&dl+ndj+!g£\" should be how you are", () => {
        expect(codecracker("&dl+ndj+!g£", true)).toBe("how you are");
    })

    test("Encrypt code, \"<!k!h\"g>ei+>h+!l£hdb£\" should be javascript is awesome", () => {
        expect(codecracker("<!k!h\"g>ei+>h+!l£hdb£", true)).toBe("javascript is awesome");
    })

    test("Nothing code, should be -1", () => {
        expect(codecracker(null, true)).toBe(-1);
    })
})