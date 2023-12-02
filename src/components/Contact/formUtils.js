
export const useFormSubmission = () => {

    const validateForm = (value) => {
        let errors = {}
        if (value.name.length < 3) {
            errors.name = 'error'
        }
        if (!value.email) {
            errors.email = 'error'
        }
        if (value.message.length < 4) {
            errors.message = 'error'
        }
        return errors
    }
    return validateForm

}