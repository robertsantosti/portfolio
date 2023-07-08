import styled from "styled-components";
import { COLORS } from "../../utils/styles/style";
import { Link } from "react-router-dom";

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  text-transform: uppercase;
`

export const MenuItem = styled(Link)<{ $active?: boolean }>`
  cursor: pointer;
  color: ${ COLORS.$white };
  border-bottom: ${({ $active }) => $active ? `2px solid ${COLORS.$white}` : 0};
  text-decoration: none;
`