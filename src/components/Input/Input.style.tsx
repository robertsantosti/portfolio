import styled from "styled-components";
import { getColor } from "../../utils/styles/style";

export const InputGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`

export const Label = styled.label<{$color: string}>`
  font-size: .75rem;
  font-weight: 700;

  color: ${({$color}) => { return getColor($color) }};
`

export const Input = styled.input<{$color: string}>`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;

  border:  1px solid ${({$color}) => { return getColor($color) }};
  border-radius: 0.3125rem;
`

export const TextArea = styled.textarea<{$color: string}>`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  
  height: 6.625rem;
  padding: 0.5rem;

  border:  1px solid ${({$color}) => { return getColor($color) }};
  border-radius: 0.3125rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  width: 100%;
`

export const Error = styled.p`
  font-size: .6rem;
  color: ${getColor('danger')};
  width: 100%;
  `

export const LengthWrapper = styled.p<{$color: string}>`
  font-size: .75rem;
  color: ${({$color}) => { return getColor($color) }};
  width: 100%;
  text-align: right;
  `

export const Info = styled.p<{$color: string}>`
  display: flex;
  align-items: center;
  gap: .1rem;
  font-size: .6rem;
  color: ${({$color}) => { return getColor($color) }};
`