import { Footer, SocialLink, SocialWrapper } from "./Footer.style"
import {SiLinkedin, SiGithub} from 'react-icons/si'

export const FooterComponent = () => {
  return(
    <Footer data-testid="footer">
      <p>Desenvolvido por <strong>Robert Santos</strong></p>

      <SocialWrapper>
        <SocialLink href="https://github.com/robertsantosti" target="_blank" data-testid="github-link">
          <SiLinkedin className="icon"/>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/robertsantosti/" target="_blank" data-testid="linkedin-link">
          <SiGithub className="icon"/>
        </SocialLink>
      </SocialWrapper>
    </Footer>
  )
}