import { IInputProps } from '../../interfaces/Input.interface';
import { EnumFormError } from '../../utils/enums/from/error';
import * as Styled from './Input.style';

export const InputComponent = ({ label, title, type, error, info, color, register, placeholder, watch, length }: IInputProps) => {
  const FORM_ERROR = EnumFormError;

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
          <Styled.MessageWrapper>
            { info &&
              <Styled.Info $color={ color || '' }>
                { info }
              </Styled.Info>
            }
            { error &&
                <Styled.Error>
                {error.type === 'required' && FORM_ERROR.REQUIRED}
                {error.type === 'maxLength' && FORM_ERROR.MAX_LENGTH.replace('LENGTH', length?.max?.toString() || '0')}
                {error.type === 'minLength' && FORM_ERROR.MIN_LENGTH.replace('LENGTH', length?.min?.toString() || '0')}
                {(error.type === 'matchPath' && type === 'email') && FORM_ERROR.EMAIL}
                </Styled.Error>
            }
          </Styled.MessageWrapper>

          { type === 'textarea' && 
              <Styled.LengthWrapper  $color={error ? 'danger' : 'primary'}>
                <strong>{ watch?.length || 0 }</strong> de <strong>{length?.max}</strong> caracteres.
              </Styled.LengthWrapper>
          }
        </>
      </Styled.InfoWrapper>

    </Styled.InputGroup>
  )
}