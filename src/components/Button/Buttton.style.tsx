import styled from "styled-components";
import { COLORS } from "../../utils/styles/style";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 700;
  
  color: ${COLORS.$white};
  background-color: transparent;

  padding: .5rem 2rem;

  border: 1px solid ${COLORS.$white};
  border-radius: 2.5rem;

  cursor: pointer;

  transition: .5s all;

  &:hover {
    border-color: ${ COLORS.$white };
    color: ${ COLORS.$primary };
    background-color: ${ COLORS.$white };
  }

  .icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

`