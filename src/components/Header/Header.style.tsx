import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../utils/styles/style";


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 1rem 2rem;

  border-bottom: 1px solid ${COLORS.$white};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .25rem;
    text-transform: uppercase;

    &.detail {
      display: flex;
      place-items: center;
      background-color: ${COLORS.$white};
      color: ${COLORS.$primary};
      font-weight: ${FONT_WEIGHT.$bold};
      padding: 0 .5rem;
    }
  }
`