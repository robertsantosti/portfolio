import styled  from "styled-components";
import { COLORS } from "../../utils/styles/style";

export const Footer = styled.footer`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${COLORS.$white};

  font-weight: 300;
  font-size: 12px;
`

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  place-items: center;
`

export const SocialLink = styled.a`
  color: #FFF;

  .icon {
    font-size: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`