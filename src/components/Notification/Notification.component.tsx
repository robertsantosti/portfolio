import * as Styled from "./Notification.style"
import { FaCheck, FaInfo, FaX } from 'react-icons/fa6'

interface INotification {
  title?: string,
  message: string,
  type?: 'success' | 'error' | 'info' | 'default',
  hasIcon?: boolean,
  icon?: React.ReactNode,
}

export const NotificationComponent = ({title, message, type = 'default', hasIcon, icon}: INotification) => {
  return(
    <Styled.Notification $color={type}>
      { hasIcon &&
        <Styled.Icon $color={type}>
              { type === 'success' && <FaCheck/>}
              { type === 'info' && <FaInfo/>}
              { type === 'error' && <FaX/>}
              { !!icon && icon }
        </Styled.Icon>
      }

      <Styled.ContentWrapper>
        { title && <Styled.Title>{ title }</Styled.Title>}
        <Styled.Message>{ message }</Styled.Message>
      </Styled.ContentWrapper>
    </Styled.Notification>
  )
}