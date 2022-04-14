function validateName( names ){
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if( !names.trim()  ){
        return "Los nombres son requeridos*";
    }else if( !regexName.test( names ) ){
        return "Solo se aceptan letras y espacios en blancos";
    }
    return "valid";
}

export default validateName;