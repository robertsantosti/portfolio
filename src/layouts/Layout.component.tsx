import { Outlet } from 'react-router-dom';

import { FooterComponent } from '../components/Footer/Footer.component';
import { HeaderComponent } from '../components/Header/Header.component';
import * as Styled from './Layout.style';

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