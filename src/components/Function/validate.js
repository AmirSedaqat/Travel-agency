export const validate = (state, type) => {
    const errors = {}

    if (!state.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        errors.email = "Email address is invalid "
    } else {
        delete errors.email
    }
    // state.password ==false emtehan kon
    if (!state.password) {
        errors.password = 'Password Required'
    } else if (state.password.length < 8) {
        errors.password = "Password needs to be 8 characters or more"
    } else {
        delete errors.password
    }

    if (type === 'signup') {

        if (!state.confirmPassword) {
            errors.confirmPassword = "Confirm the password"
        } else if (state.confirmPassword !== state.password) {
            errors.confirmPassword = 'Password do not match'
        } else {
            delete errors.confirmPassword
        }
        if (state.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = 'Accepted our regulations'
        }
        if (!state.name.trim()) {
            errors.name = 'Username Required'
        } else {
            delete errors.name;
        }
    }

    return errors;
}