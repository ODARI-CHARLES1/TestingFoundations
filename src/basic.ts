import { IAuthData } from "../src/authData";
export const product=(a:number,b:number):number=>{
    return a*b ;
}

export function authenticateUser(username: string, password: string): IAuthData {
    // Simulate authentication logic
    const authStatus = username === "deveLOPER" && password === "dev";
    return {
        usernameToLower: username.toLowerCase(),
        usernameCharacters: username.split(""),
        userDetails: { name: "Developer", role: "admin" },
        isAuthenticated: authStatus
    };
}