import { React } from 'react'
import CryptoJS from 'crypto-js';
import { SecretPass } from './config';

export const EncryptData = (Indata) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(Indata),
        SecretPass
    ).toString();
    return (data)
        
    
}

export const DecryptData = (Indata) => {
    const bytes = CryptoJS.AES.decrypt(Indata, SecretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return (
        data
    )
}
