import crypto from 'crypto'

const SECRET = 'JOSH-REST-API';
export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication =(salt: string, passwpord: string)=> {
    return crypto.createHmac('sha256', [salt, passwpord].join('/')).update(SECRET).digest('hex')
};
