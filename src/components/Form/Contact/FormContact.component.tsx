/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AlertModalContext } from '../../../contexts/Modal/AlertModal/AlertModal.context';
import { IFormContact } from '../../../interfaces/Form/contact';
import { InputComponent } from '../../Input/Input.component';
import * as Styled from './FormContact..style';

export const FormContactComponent = () => {
  const { showAlertModal, setShowAlertModal, setDataAlertModal } = useContext(AlertModalContext);
  
  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm<IFormContact>();

  const onSubmit: SubmitHandler<IFormContact> = (data) => {
    setDataAlertModal({
      title: 'Atenção',
      content: (<p>Deseja realmente realizar essa ação?</p>),
      cancelButton: {
        show: true,
        label: 'Fechar',
      },
      successButton: {
        show: true,
        label: 'Confirmar',
      },
      action: {
        reset,
        dispatch: `${data.name} email enviado com sucesso`,
      }
    });
    setShowAlertModal(true);
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
        watch={watch('message')}
        register={{...register('message', {required: true, maxLength: 500})}}
      />
      
      <Styled.FormButton
        isLoading={ showAlertModal }
        disabled={!!errors.message || !!errors.email || !!errors.name }
      >
        Enviar
      </Styled.FormButton>
    </Styled.Form>
  )
}