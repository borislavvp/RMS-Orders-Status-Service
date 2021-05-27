import jwt from 'jsonwebtoken';

export const validateClientToken = (token: string) => {
    if (token) {
        const decoded = jwt.decode(token) as {[key:string]:any};
        return decoded["iss"] === process.env.TOKEN_ISSUER;
    }
    return false;
}