import { SOCIAL_LINKS } from '../../utils/const/social-links';
import { SocialLinksComponent } from '../SocialLinks/SocialLinks.component';
import { Footer } from './Footer.style';

export const FooterComponent = () => {
  return(
    <Footer data-testid="footer">
      <p>Desenvolvido por <strong>Robert Santos</strong></p>

      <SocialLinksComponent links={SOCIAL_LINKS}/>
    </Footer>
  )
}