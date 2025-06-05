import { promisify } from "util";
import crypto from "crypto";

const scrypt = promisify(crypto.scrypt);

const generateSalt = () => {
    return crypto.randomBytes(16).toString("hex");
}

async function joinHash(pass : string, salt : string): Promise<string>{
    const derivedKey = await scrypt(pass, salt, 64) as Buffer;
    return derivedKey.toString("hex");
}

const hashPass = async (pass : string): Promise<{ hash: string, salt: string }> => {
    const salt = generateSalt();
    const hash = await joinHash(pass, salt);
    return { hash, salt };
}


const validPass= async (hashPass : string, enterPass : string, salt : string): Promise<boolean> => {
    const hash = await joinHash(hashPass, salt);
    return hash === hashPass;
}

export { hashPass, validPass };