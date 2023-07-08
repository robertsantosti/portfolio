import { ReactNode } from 'react'

export interface ISocialLink {
  id?: number,
  title: string,
  icon: ReactNode,
  url: string,
  testId: string,
}

export interface ISocialLinkProps {
  links: Array<ISocialLink>
  size?: string,
}