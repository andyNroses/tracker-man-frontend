const isEmailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const isPasswordValid = (password) => {
    return password.length > 8;
}

const isUsernameValid = (username) => {
    return username.length > 3;
}

const formValidation = (value, type) => {
    switch (type) {
        case 'email':
            return isEmailValid(value);
        case 'username':
            return isUsernameValid(value);
        case 'password':
            return isPasswordValid(value);
        default:
            return false;
    }
}

export default formValidation;