import { ISocialLink, ISocialLinkProps } from '../../interfaces/SocialLink.interface';
import * as Styled from './SocialLinks.style';

export const SocialLinksComponent = ({ links, size }: ISocialLinkProps) => {
  const renderLink = ({ id, url, testId, icon}: ISocialLink) => {
    return(
      <Styled.SocialLink key={id} $size={size} href={url} target="_blank" data-testid={testId}>
        { icon }
      </Styled.SocialLink>
    )
  }

  return(
    <Styled.SocialWrapper data-testId="social-wrapper-testId">
      { links?.map(link => renderLink(link)) }
    </Styled.SocialWrapper>
  )
}