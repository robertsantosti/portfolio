import styled from 'styled-components';

import { COLORS } from '../../../utils/styles/style';
import { ButtonComponent } from '../../Button/Button.component';

export const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 0.625rem;
  background-color: ${COLORS.$white};
  box-shadow: 5px 5px 20px 0px rgba(255, 255, 255, 0.30);
`

export const FormButton = styled(ButtonComponent)<{isLoading: boolean}>`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: ${(({ isLoading }) => { return isLoading ? COLORS.$primary : COLORS.$white})};
  color: ${(({ isLoading }) => { return isLoading ? COLORS.$white : COLORS.$primary})};
  border: 1px solid  ${(({ isLoading }) => { return isLoading ? COLORS.$white : COLORS.$primary})};

  &:hover {
    background-color: ${COLORS.$primary};
    color: ${COLORS.$white};
    border: 1px solid ${COLORS.$white};
  }
`

export const InputGroup = styled.div<{$hasError?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  label {
    font-size: .75rem;
    color: ${(prop) => { return !prop.$hasError ? COLORS.$primary : COLORS.$danger }};
    font-weight: 700;
  }
`

export const FormError = styled.p`
  font-size: .6rem; 
  color: ${COLORS.$danger};
`

export const Input = styled.input<{$hasError?: boolean}>`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;

  border: 1px solid ${(prop) => { return !prop.$hasError ? COLORS.$primary : COLORS.$danger }};
  border-radius: 0.3125rem;
  `

export const TextArea = styled.textarea<{$hasError?: boolean}>`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  
  height: 6.625rem;
  padding: 0.5rem;

  border: 1px solid ${(prop) => { return !prop.$hasError ? COLORS.$primary : COLORS.$danger }};
  border-radius: 0.3125rem;
`