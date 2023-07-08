import styled from 'styled-components';

export const ContactPageWrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  gap: 1rem;

  padding: 4.5rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0, .75);
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
`

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
`