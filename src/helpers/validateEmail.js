function validateEmail( email ){
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if( !email.trim() ){ 
        return "Este campo es requerido*";
    }
    else if( !regexEmail.test( email ) ){
        return "El correo no es valido"
    }

    return "valid";
}

export default validateEmail;