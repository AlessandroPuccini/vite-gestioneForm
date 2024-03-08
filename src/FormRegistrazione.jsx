import React from 'react'
import { useId} from 'react'
import {useForm} from 'react-hook-form'
import Input from './Input'
import CheckBox from './CheckBox'





function FormRegistrazione(errorMsg) {
    const idPrefix = useId();
    const {
        register, 
        handleSubmit, 
        formState:{errors},
        reset
     } = useForm({mode: 'onChange'});

const handleFormSubmit = (dati) => {
   reset();
   alert('Dati inviati, Grazie!')
};

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
    <h3>Form Registrazione</h3>
        <Input id={idPrefix + '-nome'} 
        rules={{required: true}} 
        info='Nome' 
        reg={register} 
        error={errors.Nome} 
        errorMsg="Nome Richiesto"/>

         <Input id={idPrefix + '-email'} 
         rules={{required: true, pattern: /^\S+@\S+$/i}} 
        info='Email' 
        reg={register} 
        error={errors.Email} 
        errorMsg="Inserire una email valida"/>

         <Input id={idPrefix + '-password'} 
         rules={{required: true, minLength: 8, maxLength: 16}} 
        info='Password'
        type='password' 
        reg={register} 
        error={errors.Password} 
        errorMsg="Inserire una Password tra 8 e 20 caratteri"/>

        <CheckBox  reg={register} info='Privacy' error={errors.Privacy} 
         text=" Accetto la privacy policy"
        rules={{required:true}}
        errorMsg="È necessario visionare e accettare la policy"/>
         
        <div className='form-field-container'> 
           <button type='submit'>INVIA</button>
        </div> 
    </form>
  )
}

export default FormRegistrazione
