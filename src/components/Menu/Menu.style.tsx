import styled from "styled-components";
import { COLORS } from "../../utils/styles/style";

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  text-transform: uppercase;
`

export const MenuItem = styled.a<{ $active?: boolean }>`
  border-bottom: ${({ $active }) => $active ? `2px solid ${COLORS.$white}` : 0};
  cursor: pointer;
`