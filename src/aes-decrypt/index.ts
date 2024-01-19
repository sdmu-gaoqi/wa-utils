import { AES, enc, mode, pad } from 'crypto-js';

const aesDecrpt = (input: string, key: string) => {
  const secretKey = enc.Utf8.parse(key);
  const iv = enc.Utf8.parse(key.substring(0, 16));
  const decrypted = AES.decrypt(input, secretKey, {
    iv,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  });
  return decrypted.toString(enc.Utf8);
};

export default aesDecrpt;
