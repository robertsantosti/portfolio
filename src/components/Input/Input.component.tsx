import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { EnumFormError } from '../../utils/enums/from/error';
import * as Styled from './Input.style';
import { useState } from 'react';

interface IInput {
  label: string,
  title: string,
  type?: 'text' | 'number' | 'email' | 'textarea',
  error?: FieldError,
  info?: string,
  color?: string,
  placeholder?: string,
  register?: UseFormRegisterReturn,
  length?: {
    min?: number;
    max?: number;
  }
}

export const InputComponent = ({ label, title, type, error, info, color, register, placeholder, length }: IInput) => {
  const FORM_ERROR = EnumFormError;

  const [messageLength, setMessageLength] = useState(0);

  return(
    <Styled.InputGroup>
      <Styled.Label 
        htmlFor={label}
        $color={error ? 'danger' : color || ''}
      >
        { title }
      </Styled.Label>

      { type !== 'textarea' &&
        <Styled.Input 
          type={type || 'text' }
          id={label} 
          placeholder={placeholder} 
          $color={error ? 'danger' : color || ''}
          {...register}
        />  
      }

      { type === 'textarea' &&
          <Styled.TextArea
            id={label} 
            placeholder={placeholder} 
            $color={error ? 'danger' : color || ''}
            maxLength={length?.max}
            {...register}
          />
      }

      <Styled.InfoWrapper>
        <>
          { error &&
              <Styled.Error>
              {error.type === 'required' && FORM_ERROR.REQUIRED}
              {error.type === 'maxLength' && FORM_ERROR.MAX_LENGTH.replace('LENGTH', length?.max?.toString() || '0')}
              {error.type === 'minLength' && FORM_ERROR.MIN_LENGTH.replace('LENGTH', length?.min?.toString() || '0')}
              {(error.type === 'matchPath' && type === 'email') && FORM_ERROR.EMAIL}
              </Styled.Error>
          }

          { info &&
            <Styled.Infos>
              <p>Infos</p>
            </Styled.Infos>
          }
        </>
      </Styled.InfoWrapper>

    </Styled.InputGroup>
  )
}