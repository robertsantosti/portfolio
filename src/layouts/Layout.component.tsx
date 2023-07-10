import { Outlet } from 'react-router-dom';
import * as Styled from './Layout.style'

import { FooterComponent } from '../components/Footer/Footer.component';
import { HeaderComponent } from '../components/Header/Header.component';

export const Layout = () => {
  return(
    <Styled.Layout>
      <HeaderComponent/>

      <main>
          <Outlet/>
      </main>

      <FooterComponent/>
    </Styled.Layout>
  )
}