import { ButtonComponent } from '../../components/Button/Button.component';
import { SocialLinksComponent } from '../../components/SocialLinks/SocialLinks.component';
import { SOCIAL_LINKS } from '../../utils/const/social-links';
import { IPageProps } from '../../utils/interfaces/pages';

import { MdCloudDownload } from 'react-icons/md'
import * as Styled from './Contact.style';


export const ContactPage = ({ errorPage }: IPageProps) => {
  const render = () => {
    return(
      <Styled.ContactPageWrapper>
        <Styled.ContainerWrapper>
          <Styled.HeaderWrapper>
            <Styled.Title>Quer deixar uma mensagem?</Styled.Title>
            <Styled.SubTitle>Entre em contato!</Styled.SubTitle>
          </Styled.HeaderWrapper>

          <SocialLinksComponent links={SOCIAL_LINKS} size='2rem'/>

        
          <ButtonComponent>
            <MdCloudDownload className="icon"/>
            <span>Download CV</span>
          </ButtonComponent>
        </Styled.ContainerWrapper>
      </Styled.ContactPageWrapper>
    )
  }
  return(
    <>
      { errorPage ? errorPage : render() }
    </>
  )
}