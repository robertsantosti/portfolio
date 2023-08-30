import { Outlet } from 'react-router-dom';

import { FooterComponent } from '../components/Footer/Footer.component';
import { HeaderComponent } from '../components/Header/Header.component';
import { AlertModalProvider } from '../contexts/Modal/AlertModal/AlertModal.context';
import { NotificationProvider } from '../contexts/Notification/Notification.context';
import * as Styled from './Layout.style';

export const Layout = () => {
  return(
    <Styled.Layout>
      <NotificationProvider>
        <AlertModalProvider>
          <HeaderComponent/>

          <main>
              <Outlet/>
          </main>

          <FooterComponent/>
        </AlertModalProvider>
      </NotificationProvider>
    </Styled.Layout>
  )
}