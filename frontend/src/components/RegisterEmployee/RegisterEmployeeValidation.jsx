function Validation(values) {
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(!values.email){
        error.email = "Name is required"
    } 
    else if(!email_pattern.test(values.email)){
        error.email = "Email is invalid"
    } else {
        error.email = ""
    }
    return error;
}

export default Validation;