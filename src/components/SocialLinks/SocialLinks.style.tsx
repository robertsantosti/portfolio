import styled from "styled-components"
import { COLORS } from "../../utils/styles/style"

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  place-items: center;
`

export const SocialLink = styled.a<{$size?: string}>`
  color: ${COLORS.$white};

  .icon {
    font-size: ${(prop) => {return prop.$size ? prop.$size : `1.25rem`}};
    width: ${(prop) => {return prop.$size ? prop.$size : `1.25rem`}};
    height: ${(prop) => {return prop.$size ? prop.$size : `1.25rem`}};
  }
`