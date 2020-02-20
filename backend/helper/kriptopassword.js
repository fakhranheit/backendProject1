const crypto = require("crypto");

module.exports = password => {
  return crypto
    .createHmac("sha256", "cryptopass")
    .update(password)
    .digest('hex');
};
