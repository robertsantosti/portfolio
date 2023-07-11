import { createContext, useState } from 'react';

import { NotificationComponent } from '../../components/Notification/Notification.component';
import { INotification, INotificationContext } from '../../interfaces/Notification.interface';
import { IChildren } from '../../utils/interfaces/context';

export const NotificationContext = createContext<INotificationContext>({
  notification: { message: 'Alerta' },
  showNotification: false,
  setNotification: () => {return},
  setShowNotification: () => {return},
});

export const NotificationProvider = ({ children }: IChildren) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notification, setNotification] = useState<INotification>({ message: 'Alerta' })

  return(
    <NotificationContext.Provider value={{notification, showNotification, setNotification, setShowNotification}}>
      { children }

      {showNotification && <NotificationComponent/>}
    </NotificationContext.Provider>
  )
}