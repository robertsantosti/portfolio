import { SiGithub, SiLinkedin } from "react-icons/si";
import { ISocialLink } from "../../interfaces/SocialLink.interface";

export const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    title: 'GitHub',
    url: 'https://github.com/robertsantosti',
    testId: 'github-link',
    icon: <SiGithub className="icon"/> ,
  },
  {
    id: 2,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/robertsantosti/',
    testId: 'linkedin-link',
    icon: <SiLinkedin className="icon"/> ,
  },
]