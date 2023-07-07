import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { FooterComponent } from '../components/Footer/Footer.component';
import { HeaderComponent } from '../components/Header/Header.component';
import { ErrorContext } from '../contexts/Error/Error.context';

export const Layout = () => {
  const location = useLocation();
  const { setError } = useContext(ErrorContext)

  
  useEffect(() => {
    if(location.pathname === '/') {
      setError({
        title: 'Vem novidade por ai!',
        description: 'Ainda estamos trabalhando nessa página.',
        code:'working',
      })
    }
  }, [ location ])

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