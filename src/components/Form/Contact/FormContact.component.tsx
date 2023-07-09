/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormContact } from '../../../interfaces/Form/contact';
import { EnumFormError } from '../../../utils/enums/from/error';
import * as Styled from './FormContact..style';


export const FormContactComponent = () => {
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormContact>();
  const onSubmit: SubmitHandler<IFormContact> = (data) => {
    alert(`${data.name}, e-mail enviado com sucesso`);
  }

  const FORM_ERROR = EnumFormError;

  return(
    <Styled.Form onSubmit={ handleSubmit(onSubmit) }>
      <Styled.InputGroup $hasError={ !!errors?.name }>
        <label htmlFor="name">Nome</label>
        <Styled.Input  $hasError={ !!errors?.name }
          {...register('name', { required: true })}
          placeholder="Digite seu nome"
        />
        { errors?.name?.type === 'required' && <Styled.FormError>{ FORM_ERROR.REQUIRED }</Styled.FormError>}
      </Styled.InputGroup>
      <Styled.InputGroup $hasError={ !!errors?.email }>
        <label htmlFor="email">E-mail</label>
        <Styled.Input type='email' $hasError={ !!errors?.email } {...register('email', {
          required: true,
          validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
        })} placeholder="Digite seu nome"/>
        { errors?.email?.type === 'required' && <Styled.FormError>{ FORM_ERROR.REQUIRED }</Styled.FormError>}
        { errors?.email?.type === 'matchPath' && <Styled.FormError>{ FORM_ERROR.EMAIL }</Styled.FormError>}
      </Styled.InputGroup>
      <Styled.InputGroup $hasError={ !!errors?.message }>
        <label htmlFor=" message">Mensagem</label>
        <Styled.TextArea $hasError={ !!errors?.message }
          {...register('message', {
            required: true,
            maxLength: 500,
          })} placeholder="Deixe sua mensagem"
        />
        { errors?.message?.type === 'required' && <Styled.FormError>{ FORM_ERROR.REQUIRED }</Styled.FormError>}
        { errors?.message?.type === 'maxLength' && <Styled.FormError>{ FORM_ERROR.MAX_LENGTH.replace('LENGTH', '500') }</Styled.FormError>}
      </Styled.InputGroup>
      
      <Styled.FormButton isLoading={loading}>Enviar</Styled.FormButton>
    </Styled.Form>
  )
}