import { FaCheck, FaInfo, FaX } from 'react-icons/fa6';

import * as Styled from './Notification.style';
import { useContext } from 'react';
import { NotificationContext } from '../../contexts/Notification/Notification.context';

export const NotificationComponent = () => {
  const { notification } = useContext(NotificationContext)

  return(
    <Styled.Notification $color={notification.type || 'default'}>
      { notification.hasIcon &&
        <Styled.Icon $color={notification.type || 'default'}>
              { notification.type === 'success' && <FaCheck/>}
              { notification.type === 'info' && <FaInfo/>}
              { notification.type === 'error' && <FaX/>}
              { !!notification.icon && notification.icon }
        </Styled.Icon>
      }

      <Styled.ContentWrapper>
        { notification.title && <Styled.Title>{ notification.title }</Styled.Title>}
        <Styled.Message>{ notification.message }</Styled.Message>
      </Styled.ContentWrapper>
    </Styled.Notification>
  )
}