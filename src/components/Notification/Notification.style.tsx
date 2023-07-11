import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style';

const getBackgoundColor = (color: string) => {
  switch(color) {
    case 'primary': return COLORS.$primary;
    case 'secondary': return COLORS.$secondary;
    case 'info': return '#476ea5';
    case 'success': return '#47934b';
    case 'light': return COLORS.$white;
    case 'dark': return COLORS.$black;
    case 'error': return COLORS.$danger;
    default: return '#EFEFEF';
  }
}

export const Notification = styled.div<{$color: string}>`
  position: absolute;

  top: 10%;
  right: 2%;

  display: flex;
  align-items: center;
  gap: 1rem;
  
  padding: .75rem 1rem;

  background-color: ${COLORS.$white};
  color:  ${({$color}) => {return getBackgoundColor($color)}};

  border-radius: 5px;

  font-size: 16px;

  box-shadow: 5px 5px 10px #FFF9;

  animation-name: slidein;
  animation-duration: .5s;

  @keyframes slidein {
    from {
      right: 0;
    }

    to {
      right: 2%;
    }
  }
`

export const Icon = styled.div<{$color: string}>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .5rem;
  border-radius: 100%;
  

  background-color:  ${({$color}) => {return getBackgoundColor($color)}};
  color: ${COLORS.$white};

  font-size: 12px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
`

export const Message = styled.p`
  font-weight: 300;
  font-size: 12px
`