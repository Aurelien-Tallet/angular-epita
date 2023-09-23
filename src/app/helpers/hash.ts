import * as crypto from 'crypto-js';

export default (arg: string): string => {
  return crypto.MD5(arg).toString();
};
