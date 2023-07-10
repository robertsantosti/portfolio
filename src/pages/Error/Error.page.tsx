import { useContext, useEffect } from 'react';

import WorkingImage from '../../assets/images/working_image.svg';
import SearchImage from '../../assets/images/search_image.svg';

import { ErrorContext } from '../../contexts/Error/Error.context';
import * as Styled from './Error.style';
import { ButtonComponent } from '../../components/Button/Button.component';
import { useLocation, useNavigate } from 'react-router-dom';
import { IErrorPageProps } from '../../interfaces/Error.interface';

export const ErrorPage = ({ isMaintence }: IErrorPageProps) => {
  const { error } = useContext(ErrorContext);
  const navigate = useNavigate();
  const path = useLocation();

  const { setError } = useContext(ErrorContext)

  useEffect(() => {
    if(isMaintence) {
      setError({
        title: 'Vem novidade por ai!',
        description: 'Ainda estamos trabalhando nessa página.',
        code:'working',
      })
    }
  }, [])

  const buttonLabel = 'Voltar para página principal';

  const redirectToHome = () => {
    navigate('/');
  }

  const renderImage = (code?: string) => {
      switch (code) {
        case 'working':
          return <img src={ WorkingImage } alt="Homem trabalhando em frente ao notebook"/>
        default:
          return <img src={ SearchImage } alt="Mulher sentada na beira do universo, lupa e planeta saturno"/>
      }
  }

  return(
    <Styled.WorkingPageWrapper data-testid="error-wrapper-testId">
      <div>
        { renderImage(error?.code) }
      </div>
      <Styled.InfoWrapper>
        <Styled.Title>{ error?.title }</Styled.Title>
        <Styled.Description>{ error?.description }</Styled.Description>

        { path.pathname !== '/' && <ButtonComponent onClick={redirectToHome}>{ buttonLabel }</ButtonComponent> }
      </Styled.InfoWrapper>
    </Styled.WorkingPageWrapper>
  )
}