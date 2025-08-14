import * as crypto from 'crypto';

export function sha1(text: crypto.BinaryLike) {
  const hash = crypto.createHash('sha1');
  hash.update(text);
  return hash.digest('hex');
}

export function sha256(text: crypto.BinaryLike) {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('hex');
}
