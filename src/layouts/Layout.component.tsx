import { FooterComponent } from "../components/Footer/Footer.component"
import { HeaderComponent } from "../components/Header/Header.component"

export const Layout = () => {
  return(
    <>
      <HeaderComponent/>

      <main>
        <p>App is Render</p>
      </main>

      <FooterComponent/>
    </>
  )
}