/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormContact } from '../../../interfaces/Form/contact';
import { InputComponent } from '../../Input/Input.component';
import * as Styled from './FormContact..style';


export const FormContactComponent = () => {
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormContact>();
  const onSubmit: SubmitHandler<IFormContact> = (data) => {
    setLoading(true);
    
    setTimeout(() => {
      alert(`${data.name}, e-mail enviado com sucesso`);
      reset();
      setLoading(false)
    }, 2000)
  }

  return(
    <Styled.Form onSubmit={ handleSubmit(onSubmit) }>
      <InputComponent
        color='primary'
        title='Nome'
        label='nome'
        placeholder='Digite seu nome...'
        error={ errors.name }
        register={{...register('name', {required: true})}}
      />
      <InputComponent
        color='primary'
        title='E-mail'
        label='email'
        type='email'
        placeholder='Digite o seu e-mail...'
        error={ errors.email }
        register={{...register('email', {
          required: true,
          validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
        })}}
      />
      <InputComponent
        color='primary'
        title='Mensagem'
        type='textarea'
        label='message'
        placeholder='Digita sua mensagem...'
        length={{max: 500}}
        error={ errors.message }
        register={{...register('message', {required: true, maxLength: 500})}}
      />
      
      <Styled.FormButton
        isLoading={loading}
        disabled={!!errors.message || !!errors.email || !!errors.name }
      >
        Enviar
      </Styled.FormButton>
    </Styled.Form>
  )
}