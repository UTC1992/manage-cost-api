import * as crypto from 'crypto';

export const jwt = {
  secret:
    'fc9bbcaf2e205efc730f9179000b3389a9bcc74b55b31a32597ee240593bdaf2947ce457214bc55560f1258b6e10081928f445d021e9aff46dd69aa714b78858',
  keyDynamic: crypto.randomBytes(64).toString('hex'),
};
