import { AES, enc, mode, pad } from 'crypto-js';

const aesEncrypt = (input: string, key: string) => {
  const secretKey = enc.Utf8.parse(key);
  const iv = enc.Utf8.parse(key.substring(0, 16));
  const encrypted = AES.encrypt(input, secretKey, {
    iv,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  });
  const text = encrypted.ciphertext.toString();

  return enc.Base64.stringify(enc.Hex.parse(text));
};

export default aesEncrypt;
