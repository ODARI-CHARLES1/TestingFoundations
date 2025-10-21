import {product,authenticateUser} from '../Src/basic'


describe("Basic test suite", () => {
    test("should return the product of two positive numbers", () => {
        const actual = product(3, 4);
        const expected = 12;
        expect(actual).toBe(expected);
    });
});

describe("Jest Matchers Examples", () => {
    it("should demonstrate various matchers", () => {
        const actual = product(3, 2);

        // Equality matchers
        expect(actual).toBe(6);           // Strict equality (===)
        expect(actual).toEqual(6);        // Deep equality
        expect(actual).not.toBe(7);       // Negation

        // Numeric matchers
        expect(actual).toBeLessThan(10);
        expect(actual).toBeLessThanOrEqual(6);
        expect(actual).toBeGreaterThan(5);
        expect(actual).toBeGreaterThanOrEqual(6);
        expect(actual).toBeCloseTo(6.0);  // Floating point comparison

        // Truthiness matchers
        expect(actual).toBeTruthy();      // Truthy values
        expect(0).toBeFalsy();            // Falsy values
        expect(actual).toBeDefined();     // Not undefined
        expect(undefined).toBeUndefined(); // Is undefined
        expect(null).toBeNull();          // Is null
    });
});

it("should work with arrays and objects", () => {
    const array = ["a", "b", "c"];
    const obj = { name: "John", age: 30 };

    // Array matchers
    expect(array).toContain("b");
    expect(array).toEqual(expect.arrayContaining(["a", "c"]));
    expect(array).toHaveLength(3);

    // Object matchers
    expect(obj).toEqual({ name: "John", age: 30 });
    expect(obj).toMatchObject({ name: "John" });
    expect(obj).toHaveProperty("name");
    expect(obj).toHaveProperty("name", "John");
});



it("user authentication test", () => {
    // ARRANGE - Set up test data and system under test
    const sut = authenticateUser; // System Under Test
    const testUsername = "deveLOPER";
    const testPassword = "dev";

    // ACT - Execute the function being tested
    const actual = sut(testUsername, testPassword);

    // ASSERT - Verify the results
    expect(actual.usernameToLower).toBe("developer");
    expect(actual.usernameCharacters).toEqual(["d", "e", "v", "e", "L", "O", "P", "E", "R"]);
    expect(actual.userDetails).toEqual({ name: "Developer", role: "admin" });
    expect(actual.isAuthenticated).toBeTruthy();
});

describe("First-U principle test suite",()=>{
    it("should return the product 5 an d4",()=>{
        //ARRANGE
       const actual=product(4,5)
       //ACT
       const expected=20
       //ASSERT
       expect(actual).toBe(expected)
    })
    describe("User Aunthentication Tests",()=>{
        it("Should convert username to lowercase",()=>{
            //ARRANGE
            const sut=authenticateUser
            //ACT
            const actual=sut("develoPER","dev")
            //ASSERT
            expect(actual.usernameToLower).toBe("developer")
        })
        it("Should split username into character array",()=>{
            //ARRANGE
            const sut=authenticateUser
            //ACT
            const actual=sut("deveLOPER","dev").usernameCharacters
            //ASSERT
            expect(actual).toContain("L")
        })
        it("Should contain aunthenticate valid user",()=>{
            //ARRANGE
            const sut=authenticateUser
            //ACT
            const actual=sut("deveLOPER","dev")
            //ASSERT
            expect(actual.usernameToLower).toContain("developer")
        })
    })
})


//JEST hhoks -beforeAll,beforeEach,


describe("JEST hooks test suite",()=>{
    let username:string
    beforeAll(()=>{
       //provide a value to  username
       username="odari"
    })
    beforeEach(()=>{
        //convert a value to lowercase
        username.toLowerCase()
    })
    it("Should check the lenght of the username",()=>{
        const length=username.length
        const expected=20
        expect(length).toBeLessThanOrEqual(expected)
    })
    it("Should check if username contain letter 'o'",()=>{
        expect(username).toContain('o')
    })


})