import { saveAs } from 'file-saver';
import { MdCloudDownload } from 'react-icons/md';

import CvFile from '../../assets/pdf/curriculo.pdf';
import { ButtonComponent } from '../../components/Button/Button.component';
import { FormContactComponent } from '../../components/Form/Contact/FormContact.component';
import { SocialLinksComponent } from '../../components/SocialLinks/SocialLinks.component';
import { SOCIAL_LINKS } from '../../utils/const/social-links';
import { IPageProps } from '../../utils/interfaces/pages';
import * as Styled from './Contact.style';

export const ContactPage = ({ errorPage }: IPageProps) => {
  const saveFile = () => {
    saveAs(CvFile, 'Curriculo - Robert Santos.pdf');
  }

  const render = () => {
    return(
      <Styled.ContactPageWrapper>
        <Styled.ContainerWrapper>
          <Styled.HeaderWrapper>
            <Styled.Title>Quer deixar uma mensagem?</Styled.Title>
            <Styled.SubTitle>Entre em contato!</Styled.SubTitle>
          </Styled.HeaderWrapper>

          <SocialLinksComponent links={SOCIAL_LINKS} size='2rem'/>

        
          <ButtonComponent onClick={saveFile}>
            <MdCloudDownload className="icon"/>
            <span>Download CV</span>
          </ButtonComponent>            
        </Styled.ContainerWrapper>


          <Styled.FormContactWrapper>
            <FormContactComponent />
          </Styled.FormContactWrapper>
      </Styled.ContactPageWrapper>
    )
  }
  return(
    <>
      { errorPage ? errorPage : render() }
    </>
  )
}