export interface INotification {
  title?: string,
  message: string,
  type?: 'success' | 'error' | 'info' | 'default',
  hasIcon?: boolean,
  icon?: React.ReactNode,
}


export interface INotificationContext {
  notification: INotification,
  showNotification: boolean,
  setNotification: React.Dispatch<React.SetStateAction<INotification>>;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}