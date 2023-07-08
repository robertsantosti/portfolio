import { Outlet } from 'react-router-dom';

import { FooterComponent } from '../components/Footer/Footer.component';
import { HeaderComponent } from '../components/Header/Header.component';

export const Layout = () => {
  return(
    <>
      <HeaderComponent/>

      <main>
        <Outlet/>
      </main>

      <FooterComponent/>
    </>
  )
}