import { useState } from "react";

export const useForm = ( initialForm, validateForm ) =>{
    const [ form, setForm ] = useState( initialForm );
    const [ errors, setErrors ] = useState( {} );
    const [ loading, setLoading ] = useState( false );
    const [ response, setResponse ] = useState( null );

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [ name ] : value
        })
    };

    const handleBlur = ( e ) => {
       
    }
    const handleErrors = ( form ) =>{
        setErrors( validateForm( form ));
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setLoading( true );
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve( () =>{
                    
                    
                })
                setResponse( true );
                setLoading( false )
            }, 1500);
            
        });

    }

    return{
        form, errors, loading, response, handleChange, handleBlur, handleSubmit, handleErrors
    }
}
