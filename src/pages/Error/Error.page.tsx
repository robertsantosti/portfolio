import { useContext } from 'react';

import WorkingImage from '../../assets/images/working_image.svg';
import SearchImage from '../../assets/images/search_image.svg';

import { ErrorContext } from '../../contexts/Error/Error.context';
import * as Styled from './Error.style';


export const ErrorPage = () => {
  const { error } = useContext(ErrorContext);

  const renderImage = (code?: string) => {
    return code === '404'
      ? <img src={ SearchImage } alt="Mulher sentada na beira do universo, lupa e planeta saturno" />
      : <img src={ WorkingImage } alt="Homem trabalhando em frente ao notebook" />
  }

  return(
    <Styled.WorkingPageWrapper>
      <div>
        { renderImage(error?.code) }
      </div>
      <Styled.InfoWrapper className="info-wrapper">
        <Styled.Title>{ error?.title }</Styled.Title>
        <Styled.Description>{ error?.description }</Styled.Description>
        <button>Voltar para página principal</button>
      </Styled.InfoWrapper>
    </Styled.WorkingPageWrapper>
  )
}