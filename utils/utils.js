const bCrypt = require(`bcrypt`);

const createHash = password => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

const isValidPassword = (userPassword, password) => {
    return bCrypt.compareSync(password, userPassword);
};

const passwordDoesNotMatch = (password, passwordConfirmation) => {
    return password === passwordConfirmation
}

module.exports = {
    createHash,
    isValidPassword,
    passwordDoesNotMatch
}